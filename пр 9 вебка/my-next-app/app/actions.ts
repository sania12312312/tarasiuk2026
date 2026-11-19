"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Введіть мінімум 2 символи"),
  email: z.string().trim().email("Введіть коректний email"),
  topic: z.enum(
    ["Підручник", "Довідник", "Художня"],
    { error: "Оберіть тип книги" }
  ),
  details: z.string().trim().min(5, "Назва книги має містити мінімум 5 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
};

export async function submitRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Перевірте правильність заповнення форми",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Заявку на книгу перевірено!",
    errors: {},
  };
}
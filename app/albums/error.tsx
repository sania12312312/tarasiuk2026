
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: "30px" }}>
      <h2>Не вдалося завантажити альбоми.</h2>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </main>
  );
}
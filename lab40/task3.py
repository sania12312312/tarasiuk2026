
import csv


class Expense:
    def __init__(self, date, category, amount, comment):
        self.date = date
        self.category = category
        self.amount = float(amount)
        self.comment = comment

    def is_big(self, limit):
        return self.amount > limit

    def describe(self):
        date_parts = self.date.split("-")
        formatted_date = ".".join(reversed(date_parts))

        return (
            f"{formatted_date} {self.category} "
            f"{self.amount:.2f} ({self.comment})"
        )


expenses = []

with open("data/expenses.csv", "r", encoding="utf-8") as file:
    for line in file:
        line = line.strip()

        if not line or line.startswith("#"):
            continue

        parts = line.split(";")

        if len(parts) == 4:
            expense = Expense(*parts)
            expenses.append(expense)

print("Number of expenses:", len(expenses))
print("\nLarge expenses (over 100 UAH):")

for expense in expenses:
    if expense.is_big(100):
        print(expense.describe())

class Expense:
    def __init__(self, date, category, amount, comment):
        self.date = date
        self.category = category
        self.amount = float(amount)
        self.comment = comment

    def describe(self):
        date_parts = self.date.split("-")
        formatted_date = ".".join(reversed(date_parts))
        return f"{formatted_date} {self.category} {self.amount:.2f} ({self.comment})"

class ExpenseBook:
    def __init__(self):
        self.expenses = []

    def add(self, expense):
        self.expenses.append(expense)

    def total(self):
        return sum(expense.amount for expense in self.expenses)

    def by_category(self, category):
        return [
            expense for expense in self.expenses
            if expense.category == category
        ]

    def top(self, n):
        return sorted(
            self.expenses,
            key=lambda expense: expense.amount,
            reverse=True
        )[:n]

book = ExpenseBook()

with open("data/expenses.csv", "r", encoding="utf-8") as file:
    for line in file:
        line = line.strip()

        if not line or line.startswith("#"):
            continue

        parts = line.split(";")

        if len(parts) == 4:
            book.add(Expense(*parts))

print("Number of expenses:", len(book.expenses))
print(f"Total expenses: {book.total():.2f} UAH")

print("\nExpenses by category:")

categories = sorted(set(
    expense.category for expense in book.expenses
))

for category in categories:
    category_expenses = book.by_category(category)
    category_total = sum(e.amount for e in category_expenses)
    print(f"{category}: {category_total:.2f} UAH")

print("\nTop 3 expenses:")

for expense in book.top(3):
    print(expense.describe())

class Student:
    def __init__(self, name, surname, group, birth_year):
        self.name = name
        self.surname = surname
        self.group = group
        self.birth_year = birth_year

    def full_name(self):
        return f"{self.name} {self.surname}"

    def age(self, year):
        return year - self.birth_year

    def card(self):
        return (
            "+---------------------+\n"
            f"| {self.full_name():<20}|\n"
            f"| group: {self.group:<13}|\n"
            f"| age in 2026: {self.age(2026):<10}|\n"
            "+---------------------+"
        )


student1 = Student("Oleksandr", "Tarasiuk", "IT-32", 2009)
student2 = Student("Tymofii", "Bondar", "IT-32", 2008)

print(student1.card())
print()
print(student2.card())

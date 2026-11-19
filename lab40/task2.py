
class Student:
    college = "FKTBP VNU"
    count = 0

    def __init__(self, name, surname, group, birth_year):
        self.name = name
        self.surname = surname
        self.group = group
        self.birth_year = birth_year
        Student.count += 1


student1 = Student("Oleksandr", "Tarasiuk", "IT-32", 2009)
student2 = Student("Tymofii", "Bondar", "IT-32", 2008)

print("College through class:", Student.college)
print("College through object:", student1.college)

student1.college = "My College"

print("\nAfter changing college:")
print("Student 1:", student1.college)
print("Student 2:", student2.college)

print("\nNumber of students:", Student.count)

print("\nStudent dictionary:")
print(student1.__dict__)

print("\nClass dictionary:")
print(Student.__dict__)

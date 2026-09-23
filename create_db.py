import sqlite3

conn = sqlite3.connect("lab_work_6.db")
cursor = conn.cursor()

cursor.execute("PRAGMA foreign_keys = ON")

cursor.executescript("""
DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    group_name TEXT,
    age INTEGER
);

CREATE TABLE subjects (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    hours INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'активний'
);

CREATE TABLE grades (
    id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    subject_id INTEGER NOT NULL,
    grade INTEGER NOT NULL,
    date TEXT NOT NULL,
    FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE RESTRICT,
    FOREIGN KEY (subject_id)
        REFERENCES subjects(id)
        ON DELETE RESTRICT
);

INSERT INTO students VALUES
(1, 'Тарасюк Олександр', 'ІТ-32', 17),
(2, 'Іваненко Андрій', 'ІТ-32', 18),
(3, 'Петренко Максим', 'ІТ-31', 18);

INSERT INTO subjects VALUES
(1, 'Бази даних', 60, 'активний'),
(2, 'Програмування', 90, 'активний'),
(3, 'Вебтехнології', 75, 'активний'),
(4, 'Операційні системи', 60, 'активний'),
(5, 'Математика', 60, 'активний'),
(6, 'Комп''ютерні мережі', 60, 'активний');

INSERT INTO grades VALUES
(1, 1, 1, 88, '2026-09-01'),
(2, 1, 2, 76, '2026-09-02'),
(3, 1, 3, 91, '2026-09-03'),
(4, 2, 1, 95, '2026-09-04'),
(5, 2, 2, 82, '2026-09-05'),
(6, 2, 3, 78, '2026-09-06'),
(7, 3, 1, 89, '2026-09-07'),
(8, 3, 4, 74, '2026-09-08'),
(9, 3, 5, 86, '2026-09-09');
""")

conn.commit()
conn.close()

print("База даних створена успішно!")
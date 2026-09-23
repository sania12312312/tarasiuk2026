PRAGMA foreign_keys = ON;

SELECT * FROM students;
SELECT * FROM subjects;
SELECT * FROM grades;

-- ЗАВДАННЯ 1
UPDATE grades
SET grade = 95
WHERE id = 1;

SELECT * FROM grades
WHERE id = 1;

-- ЗАВДАННЯ 2
UPDATE subjects
SET hours = 65
WHERE id = 1;

SELECT * FROM subjects
WHERE id = 1;

-- ЗАВДАННЯ 3
SELECT COUNT(*) AS count_before
FROM grades;

DELETE FROM grades
WHERE id = 4;

SELECT COUNT(*) AS count_after
FROM grades;

SELECT * FROM grades;

-- ЗАВДАННЯ 4
SAVEPOINT check_on_delete;

DELETE FROM subjects
WHERE id = 1;

ROLLBACK TO check_on_delete;
RELEASE check_on_delete;

SELECT * FROM subjects
WHERE id = 1;

SELECT * FROM grades
WHERE subject_id = 1;

-- ПІДСУМКОВА ПЕРЕВІРКА
PRAGMA foreign_key_check;

SELECT * FROM students;
SELECT * FROM subjects;
SELECT * FROM grades;
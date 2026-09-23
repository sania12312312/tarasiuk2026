import sqlite3

conn = sqlite3.connect("lab_work_4.db")
cursor = conn.cursor()

cursor.execute("PRAGMA foreign_keys = ON")

try:
    cursor.execute("""
        INSERT INTO grades (id, student_id, subject_id, grade, date)
        VALUES (100, 9999, 1, 90, '2026-09-10')
    """)
    conn.commit()
except sqlite3.IntegrityError as e:
    print("Помилка:")
    print(e)

conn.close()
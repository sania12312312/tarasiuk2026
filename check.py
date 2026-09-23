import sqlite3

conn = sqlite3.connect("lab_work_4.db")
cursor = conn.cursor()

cursor.execute("PRAGMA foreign_keys = ON")

print("ТАБЛИЦІ:")
cursor.execute("""
SELECT name
FROM sqlite_master
WHERE type = 'table'
ORDER BY name
""")
for row in cursor.fetchall():
    print(row[0])

print("\nЗОВНІШНІ КЛЮЧІ GRADES:")
cursor.execute("PRAGMA foreign_key_list(grades)")
for row in cursor.fetchall():
    print(row)

print("\nПЕРЕВІРКА FOREIGN KEY:")
cursor.execute("PRAGMA foreign_key_check")
print(cursor.fetchall())

print("\nSTUDENTS:")
cursor.execute("SELECT * FROM students")
for row in cursor.fetchall():
    print(row)

print("\nSUBJECTS:")
cursor.execute("SELECT * FROM subjects")
for row in cursor.fetchall():
    print(row)

print("\nGRADES:")
cursor.execute("SELECT * FROM grades")
for row in cursor.fetchall():
    print(row)

conn.close()
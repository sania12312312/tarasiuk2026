import sqlite3

conn = sqlite3.connect("lab_work_6.db")
cursor = conn.cursor()

cursor.execute("PRAGMA foreign_keys = ON")

print("STUDENTS:")
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

print("\nFOREIGN KEY CHECK:")
cursor.execute("PRAGMA foreign_key_check")
print(cursor.fetchall())

conn.close()
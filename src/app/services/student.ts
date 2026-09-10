import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students = signal([
    {
      id: 1,
      name: 'Анна',
      age: 18,
      grade: 11
    },
    {
      id: 2,
      name: 'Максим',
      age: 17,
      grade: 8
    },
    {
      id: 3,
      name: 'Олег',
      age: 18,
      grade: 6
    }
  ]);

  getStudents() {
    return this.students;
  }

  addStudent(name: string, age: number, grade: number) {
    const newStudent = {
      id: this.students().length > 0
        ? Math.max(...this.students().map(student => student.id)) + 1
        : 1,
      name: name,
      age: age,
      grade: grade
    };

    this.students.update(students => [
      ...students,
      newStudent
    ]);
  }

  removeStudent(id: number) {
    this.students.update(students =>
      students.filter(student => student.id !== id)
    );
  }
}
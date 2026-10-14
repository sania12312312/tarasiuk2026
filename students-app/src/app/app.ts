import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = '';
  age: number | null = null;
  grade: number | null = null;

  constructor(private studentService: StudentService) {}

  get students() {
    return this.studentService.getStudents();
  }

  addStudent() {
    if (
      this.name.trim() &&
      this.age !== null &&
      this.grade !== null
    ) {
      this.studentService.addStudent(
        this.name,
        this.age,
        this.grade
      );

      this.name = '';
      this.age = null;
      this.grade = null;
    }
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);
  }
}
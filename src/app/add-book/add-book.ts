import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook {
  title = '';
  author = '';
  description = '';
  submitted = false;
  books: any[] = [];

  addItem(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.books.push({
      title: form.value.title,
      author: form.value.author,
      description: form.value.description
    });

    form.resetForm();
    this.submitted = false;
  }
}
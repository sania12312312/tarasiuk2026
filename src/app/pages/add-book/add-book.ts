import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book';

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

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  addBook(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.bookService.addItem({
      title: this.title,
      author: this.author,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/books']);
  }
}
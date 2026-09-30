import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  imports: [RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getItems();
  }
}
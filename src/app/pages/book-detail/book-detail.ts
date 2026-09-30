import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book, BookService } from '../../services/book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  book: Book | undefined;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.book = this.bookService.getItemById(this.id);
    });
  }
}
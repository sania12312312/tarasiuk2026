import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  id: number = 0;

  books = [
    {
      id: 1,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      pages: 400
    },
    {
      id: 2,
      title: '1984',
      author: 'Джордж Орвелл',
      pages: 320
    },
    {
      id: 3,
      title: 'Гобіт',
      author: 'Дж. Р. Р. Толкін',
      pages: 300
    }
  ];

  book: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);

      this.book = this.books.find(
        book => book.id === this.id
      );
    });
  }
}
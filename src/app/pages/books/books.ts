import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [RouterLink, NgFor],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {
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
}
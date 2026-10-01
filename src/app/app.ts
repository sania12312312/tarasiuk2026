import { Component } from '@angular/core';
import { AddBook } from './add-book/add-book';

@Component({
  selector: 'app-root',
  imports: [AddBook],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
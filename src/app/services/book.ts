import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Антиутопічний роман'
    },
    {
      id: 2,
      title: 'Майстер і Маргарита',
      author: 'Михайло Булгаков',
      description: 'Філософський роман'
    },
    {
      id: 3,
      title: 'Гаррі Поттер і філософський камінь',
      author: 'Джоан Ролінґ',
      description: 'Фентезійний роман'
    }
  ];

  getItems(): Book[] {
    return this.books;
  }

  getItemById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addItem(item: Omit<Book, 'id'>): void {
    const newId = this.books.length > 0
      ? Math.max(...this.books.map(book => book.id)) + 1
      : 1;

    this.books.push({
      id: newId,
      ...item
    });
  }
}
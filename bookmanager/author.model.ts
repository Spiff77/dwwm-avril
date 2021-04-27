import {Book} from './book.model';

export class Author {

    books: Book[]  = [];

    constructor(private id: number, public firstname: string, public lastname: string, books?: Book[]) {
        this.books = books || [];
    }
}


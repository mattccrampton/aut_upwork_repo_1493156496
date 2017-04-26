import Book from './Book';

class BookList {
  constructor(book_list) {
    this.book_list = book_list.map((book) => { return new Book(book) });
  }

  get(index){
    return this.book_list[index];
  }

  map(func){
    return this.book_list.map(func);
  }

}

export default BookList;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  read() {
    return `I am reading ${this.title}`;
  }

  static isBook(book) {
    return book instanceof Book;
  }

  static isBook2(book) {
    return book.constructor.name === "Book";
  }
} 

export default Book;

// Task 1- create a book class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.ISBN = isbn;
        this._isAvailable = true; 
    }

 getDetails() {
    return `Book title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
 }

 //Accessing the _isAvailable value
 get isAvailable() {
    return this._isAvailable;
}

// Setting value of the _isAvilable property in terms of boolean values
 set isAvailable(available) {
     this._isAvailable = available;
 }

}


// Task 2- Create a section class

class Section {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

   addBook(book) {
    if (book instanceof Book) {
        this.books.push(book);
    }
    else {
        console.log ('Error')
    }
}
    getAvailableBooks() {
        return this.books.filter (book => book.isAvailable).length;
    }

    listBooks() {
        return this.books.map(book => `${book.title} (${book.isAvailable ? 'Available' : 'Not Available'})`).join(', '); 
    }
   }


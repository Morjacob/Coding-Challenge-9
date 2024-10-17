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
   

//Task 3- create a Patron Class

class Patron {
    constructor (name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false; 
            this.borrowedBooks.push(book); 
            console.log(`${this.name} has borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is not available for checkout.`);
        }
    }

    returnBook(title) {
        const book = this.borrowedBooks.find(book => book.title === title);
        if (book) {
            book.isAvailable = true; 
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // Takes book out of the list
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${title}" borrowed.`);
        }
    }
}

// Task 4-  Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor (name) {
        super (name);
        this.priority = true; 
    }

borrowBook(book) {
    if (book.isAvailable) {
        book.isAvailable = false; // shows the book as checked out already
        this.borrowedBooks.push(book); 
        console.log(`VIP holder, ${this.name}, has borrowed "${book.title}".`);
    } else {
        console.log(`"${book.title}" is currently not available.`);
        this.overrideBorrow(book);
    }
}

}

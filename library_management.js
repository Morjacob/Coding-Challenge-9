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
        const result = []; 
        for (const book of this.books) {
            const availability = book.isAvailable ? 'Available' : 'Not Available'; 
            result.push(`${book.title} (${availability})`);
        }
        return result; 
    }

    //counting how many books are available
    calculateTotalBooksAvailable() {
        let count = 0;
        for (const book of this.books) {
            if (book.isAvailable) {
                count++;
            }
        }
        return count;
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

overrideBorrow(book) {
    const regularPatron = patrons.find(patron => patron.borrowedBooks.includes(book));
    if (regularPatron) {
        console.log(`"${book.title}" was returned from ${regularPatron.name} for VIP holder ${this.name}.`);
        regularPatron.returnBook(book.title); // overriding regular patrons book checkout
        book.isAvailable = false; // VIP can checkout the book now
        this.borrowedBooks.push(book);
        console.log(`VIP holder, ${this.name}, has  borrowed "${book.title}"`);
    } else {
        console.log(`${book.title} not available.`);
    }
}
}


//Task 6- Create and Manage Sections and Patrons

const romanceSection = new Section (`Romance`);
const horrorSection = new Section (`Horror`);

const book1 = new Book(`Pride and Prejudice`, `Jane Austen`, `782205`);
const book2 = new Book(`Dracula`, `Bram Stoker`, `893464`);
const book3 = new Book(`Fahrenheit 451`, `Ray Bradbury`, `884456`);

console.log(book1.getDetails());
console.log(book2.getDetails());
console.log(book3.getDetails());

romanceSection.addBook(book1);
horrorSection.addBook(book2);
horrorSection.addBook(book3);

const patrons = []; 
const patron1 = new Patron(`Stacy Wheeler`);
const patron2 = new Patron (`Katie Green`);
const VIPPatron1 = new VIPPatron(`Julia Jackson`);

patrons.push(patron1, patron2, VIPPatron1); 

patron1.borrowBook(book2); 
patron2.borrowBook(book1);
VIPPatron1.borrowBook(book2); 

console.log(`Romance Section Books:`);
console.log(romanceSection.listBooks());
console.log(`Total available books in romance Section: ${romanceSection.calculateTotalBooksAvailable()}`);

console.log(`Horror Section Books:`);
console.log(horrorSection.listBooks());
console.log(`Total available books in horror Section: ${horrorSection.calculateTotalBooksAvailable()}`);



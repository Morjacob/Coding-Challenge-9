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



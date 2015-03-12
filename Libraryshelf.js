//Shelf Constructor
var Book = require('./Librarybook');
var size = require('./Objectsize')

var Shelf = function(name){
	this.name = name;
	this.books = {};
	//should be derived from the number of books that you have in the books object below
	this.numOfBooks = function() {
		return "There is/are " + size(this.books)  + " book(s) on the " + this.name + " shelf";
	};

	this.addBook = function(book) { // take book as an argument
		this.books[book.title] = book; // add that book to the books object .title is what tells it to refer to the book file.  
		// so now, book.title is now the key.  and the value is what's in book, ie title and author, from the Librarybook.js file.  
	};
	
	this.removeBook = function(book){ //take book as an argument
		delete this.books[book.title] 
		};// referencing the key to delete, but deleting the key value pair.  
};


module.exports = Shelf;
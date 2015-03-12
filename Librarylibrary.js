var size = require('./Objectsize')
var Shelf = require('./Libraryshelf');
var Book = require('./Librarybook');

var Library = function(name) {
	this.name = name;
	this.shelves = {};
	// derived from the number of shelves that you have in the shelves object.
	this.numOfShelves = function() {
		return "There is/are " + size(this.shelves) + " shelf/shelves in " + this.name;
	};

	this.addShelf = function(shelf) { // take a shelf as an argument
		this.shelves[shelf.name] = shelf; // add that shelf to the shelves object // this .name is referring to the shelf.name in the shelf file.  
		// you are adding the shelf name (from the other file) as a key.  and the value will be what's in the Shelf file function.  
	};
	
	this.removeShelf = function(shelf){ // we take a shelf as an argument
		delete this.shelves[shelf.name] // we delete that shelf from the shelves object // referencing the key to delete, 
		//but deleting the key value pair.  
	};


	this.books = function() {
		var books = {}; // Make an empty object to hold our books
		for (var shelfname in this.shelves) { // loop across all the shelves in the library, iterating through the keys in this.shelves object
			var shelf = this.shelves[shelfname]; // get the shelf (what is in shelf function). setting a variable to what you're iterating on.  
			for (var bookTitle in shelf.books) { // loop across all the books on this shelf, because in the shelf function, you had a books object.  
				books[bookTitle] = shelf.books[bookTitle]; // add the book to the books object, from what's present in the shelf.books object (line 7 in LibraryShelf.js)
			}
		}
		return books; // return the accumulated collection of books
	};

	this.hasBook = function (book) {
  	var books = this.books();
  	if (typeof books[book] != 'undefined')	
    console.log(book + " was found in the library!");
  	else
    console.log("Unfortunately, " + book + " was not found :-(");
};

};

module.exports = Library;
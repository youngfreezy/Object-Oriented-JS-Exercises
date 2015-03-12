//Model a library using objects. *
// A library contains shelves. Shelves contain books. 
// Books have an author and a title. 
// Give the library methods to add and remove a shelf. 
// A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in 
// its own file. Add any functionality you think appropriate.

var Library = require('./Librarylibrary');
var Shelf = require('./Libraryshelf');
var Book = require('./Librarybook');
var size = require('./Objectsize')


// creating a new Library
var HighSchoolLibrary = new Library('Walter Johnson');
// creating a new Shelf
var historyShelf = new Shelf("History");
var scifiShelf = new Shelf("Sci-Fi");
// creating a new Book
var greatExpectations = new Book("Great Expectations", "Charles Dickens");
var endersGame = new Book("Ender's Game", "Orson Scott Card");
var greatGatsby = new Book("Great Gatsby", "Some dude");
// adding a book to a shelf
historyShelf.addBook(greatExpectations);
historyShelf.addBook(greatGatsby);
scifiShelf.addBook(endersGame);
// adding a shelf to a library
HighSchoolLibrary.addShelf(historyShelf);
HighSchoolLibrary.addShelf(scifiShelf);
// listing all the shelves in a library
console.log(HighSchoolLibrary.shelves); 
// listing all the books on a shelf
console.log(historyShelf.books);
console.log(HighSchoolLibrary.shelves["Sci-Fi"].books);
// listing all the books in a library
console.log(HighSchoolLibrary.books());
// removing a book from a shelf
historyShelf.removeBook(greatExpectations);
//removing a shelf from a library
HighSchoolLibrary.removeShelf(historyShelf);

//seeing if a book is in the library
HighSchoolLibrary.hasBook("Ender's Game");
HighSchoolLibrary.hasBook("War and Peace");

//number of Shelves
console.log(HighSchoolLibrary.numOfShelves());
//number of books on each shelf
console.log(historyShelf.numOfBooks());
console.log(scifiShelf.numOfBooks());
//All the books in the library.  

console.log("There is/are " + size(HighSchoolLibrary.books()) + " book(s) in the library today!");

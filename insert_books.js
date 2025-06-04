// insert_books.js
// This script inserts multiple book documents into the 'books' collection in MongoDB.
db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 30,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 25,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 15,
    in_stock: false,
    pages: 336,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 20,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 35,
    in_stock: true,
    pages: 498,
    publisher: "Harper"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 28,
    in_stock: false,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Memoir",
    published_year: 2018,
    price: 32,
    in_stock: true,
    pages: 448,
    publisher: "Crown Publishing Group"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 18,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 22,
    in_stock: false,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 27,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  }
]);


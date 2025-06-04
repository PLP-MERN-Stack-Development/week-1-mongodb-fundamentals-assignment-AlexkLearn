// queries.js

// --- Task 2: Basic CRUD Operations ---

// Find all books in a specific genre
// Example: genre = 'Fiction'
db.books.find({ genre: 'Fiction' });

// Find books published after a certain year
// Example: year = 2015
db.books.find({ published_year: { $gt: 2015 } });

// Find books by a specific author
// Example: author = 'George Orwell'
db.books.find({ author: 'George Orwell' });

// Update the price of a specific book
// Example: title = '1984', newPrice = 12.99
db.books.updateOne(
  { title: '1984' },
  { $set: { price: 12.99 } }
);

// Delete a book by its title
// Example: title = 'The Great Gatsby'
db.books.deleteOne({ title: 'The Great Gatsby' });


// --- Task 3: Advanced Queries ---

// Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort by price (ascending)
db.books.find().sort({ price: 1 });

// Sort by price (descending)
db.books.find().sort({ price: -1 });

// Pagination: page 1 (skip 0), limit 5
db.books.find().skip(0).limit(5);

// Pagination: page 2 (skip 5), limit 5
db.books.find().skip(5).limit(5);


// --- Task 4: Aggregation Pipeline ---

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: '$genre', avgPrice: { $avg: '$price' } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: '$author', bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [ { $substr: [ { $toString: '$published_year' }, 0, 3 ] }, '0s' ] }
    }
  },
  {
    $group: { _id: '$decade', count: { $sum: 1 } }
  }
]);


// --- Task 5: Indexing ---

// Create an index on the title field
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Explain query performance using the index
db.books.find({ title: '1984' }).explain('executionStats');

// Find books with a specific title using the index
db.books.find({ title: '1984' }).hint({ title: 1 });

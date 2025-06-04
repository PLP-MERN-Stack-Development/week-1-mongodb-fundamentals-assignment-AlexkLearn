# 📘 plp\_bookstore

## Project Description

This project demonstrates the use of MongoDB to manage a bookstore database. It includes:

* MongoDB setup
* Inserting sample data into a `books` collection
* Performing CRUD operations
* Running advanced queries
* Using aggregation pipelines
* Creating indexes to optimize performance

## 🛠️ Setup Instructions

### Option 1: Local MongoDB

1. Install MongoDB Community Edition from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Start MongoDB server (e.g., using `mongod`)
3. Open the MongoDB shell with `mongosh`
4. Run the following:

   ```
   use plp_bookstore
   load('insert_books.js')
   load('queries.js')
   ```

### Option 2: MongoDB Atlas (Cloud)

1. Sign up at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier)
3. Connect to your cluster via MongoDB Shell or Compass
4. Create a new database `plp_bookstore` and a collection `books`
5. Use Atlas UI or Compass to import data manually or run `insert_books.js` and `queries.js` using MongoDB Shell

## 📂 Files in This Repository

* `insert_books.js`: Contains initial documents for the `books` collection.
* `queries.js`: Contains all MongoDB queries from CRUD to indexing.
* `README.md`: Setup and description file.

## ✅ Submission Checklist

* [x] `insert_books.js`
* [x] `queries.js`
* [x] `README.md`
* [x] MongoDB Compass/Atlas screenshot
* [x] All files committed and pushed to GitHub

---

Thank you! 🎯

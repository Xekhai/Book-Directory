const express = require("express");
require("dotenv").config();

const book = require("./core/books"); // Import the book module
const app = express();

// Use express middleware to parse incoming JSON requests
app.use(express.json());

// Define the GET endpoint for books
app.get("/books", async (req, res) => {
// Get all books from the book module
const books = await book.getAllBooks();
// Send the books in the response
res.send(books);
});

// Define the POST endpoint for books
app.post("/books", async (req, res) => {
// Call the addBook function from the book module and pass in the request body
const result = await book.addBook(req.body);
// Send the result in the response
res.send(result);
});

// Define the PUT endpoint for books
app.put("/books/:id", async (req, res) => {
// Call the updateBook function from the book module and pass in the request parameters and body
const result = await book.updateBook(req.params.id, req.body);
// Send the result in the response
res.send(result);
});

// Define the DELETE endpoint for books
app.delete("/books/:id", async (req, res) => {
// Call the deleteBook function from the book module and pass in the request parameters
const result = await book.deleteBook(req.params.id);
// Send the result in the response
res.send(result);
});

// Set the port for the server
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
console.log('Server is running on port ${port}');
});

// This file sets up the Express server and defines endpoints for CRUD operations on books. It uses the book module to perform these operations and sends the results in the response. The server is started on the specified port and listens for incoming requests.
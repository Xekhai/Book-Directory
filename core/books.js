// Import the necessary modules and libraries
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Create a single supabase client for interacting with the database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Function to retrieve all books from the database
const getAllBooks = async () => {
  // Select all columns from the books table
  const rows = await supabase.from("books").select("*");
  return rows;
};

// Function to add a new book to the database
const addBook = async (book) => {
  // Check if the book object is valid and contains all required fields (title, author, year)
  if (!book || !book.title || !book.author || !book.year) {
    return {
      error:
        "Invalid book information. Title, author, and year are required fields.",
    };
  }

  // Insert the book into the books table
  const result = await supabase.from("books").insert(book);
  return result;
};

// Function to update an existing book in the database
const updateBook = async (id, book) => {
  // Check if the book with the given ID exists in the books table
  const existingBook = await supabase
    .from("books")
    .select("entry_id, title")
    .eq("entry_id", id);
  if (existingBook.data.length == 0) {
    return { error: `Book with ID - ${id} -not found.` };
  }

  // Update the book in the books table
  const result = await supabase.from("books").update(book).eq("entry_id", id);
  return result;
};

// Function to delete a book from the database
const deleteBook = async (id) => {
    // Check if the book with the given ID exists in the books table
    const existingBook = await supabase
      .from("books")
      .select("entry_id, title")
      .eq("entry_id", id);
    if (existingBook.data.length == 0) {
      return { error: `Book with ID - ${id} -not found.` };
    }
  
    // Delete the book from the books table
    const result = await supabase.from("books").delete().eq("entry_id", id);
    return result;
  };

// Export the functions to be used by other modules
module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
};

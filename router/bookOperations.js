const axios = require("axios");
const books = require("./booksdb.js");

async function getAllBooks() {
  try {
    return Object.values(books);
  } catch (error) {
    console.error("Error fetching all books:", error);
    throw error;
  }
}

function searchByISBN(isbn) {
  return new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) {
      resolve(book);
    } else {
      reject(new Error("Book not found"));
    }
  });
}

async function searchByAuthor(author) {
  try {
    return Object.values(books).filter((book) => book.author === author);
  } catch (error) {
    console.error("Error searching by author:", error);
    throw error;
  }
}

async function searchByTitle(title) {
  try {
    return Object.values(books).filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  } catch (error) {
    console.error("Error searching by title:", error);
    throw error;
  }
}

module.exports = {
  getAllBooks,
  searchByISBN,
  searchByAuthor,
  searchByTitle,
};

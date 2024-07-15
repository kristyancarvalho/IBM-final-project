const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (
      isValid(username) &&
      !users.find((user) => user.username === username)
    ) {
      users.push({ username, password });
      return res.status(200).json({ message: "User registered successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid username or user already exists" });
    }
  }
  return res.status(400).json({ message: "Invalid user details" });
});

public_users.get("/", function (req, res) {
  res.json(books);
});

public_users.get("/isbn/:isbn", function (req, res) {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

public_users.get("/author/:author", function (req, res) {
  const authorBooks = Object.values(books).filter(
    (book) => book.author === req.params.author
  );
  if (authorBooks.length > 0) {
    res.json(authorBooks);
  } else {
    res.status(404).json({ message: "No books found for this author" });
  }
});

public_users.get("/title/:title", function (req, res) {
  const titleBooks = Object.values(books).filter((book) =>
    book.title.toLowerCase().includes(req.params.title.toLowerCase())
  );
  if (titleBooks.length > 0) {
    res.json(titleBooks);
  } else {
    res.status(404).json({ message: "No books found with this title" });
  }
});

public_users.get("/review/:isbn", function (req, res) {
  const book = books[req.params.isbn];
  if (book && book.reviews) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "No reviews found for this book" });
  }
});

module.exports.general = public_users;

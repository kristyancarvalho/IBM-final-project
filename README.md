# IBM Course Final Project: Book Review API

This is a Node.js and Express.js based RESTful API for a book review application. It allows users to view books, register, login, and add/modify/delete book reviews.

## Features

- Get list of all books
- Search books by ISBN, author, or title
- View book reviews
- User registration and authentication
- Add, modify, and delete book reviews (for authenticated users)

## Installation

1. Clone the repository:
git clone https://github.com/kristyancarvalho/IBM-final-project.git
cd IBM-final-project
2. Install dependencies:
npm install
3. Create a `.env` file in the root directory and add your JWT secret as shown in '.env-example'.

## Running the Server

Start the server with:
node index.js
The server will start running on `http://localhost:5000`.

## API Endpoints

### Public Routes

- `GET /` - Get all books
- `GET /isbn/:isbn` - Get book by ISBN
- `GET /author/:author` - Get books by author
- `GET /title/:title` - Get books by title
- `GET /review/:isbn` - Get reviews for a book
- `POST /register` - Register a new user

### Authenticated Routes

- `POST /customer/login` - User login
- `PUT /customer/auth/review/:isbn` - Add or modify a book review
- `DELETE /customer/auth/review/:isbn` - Delete a book review

## Testing

You can test the API using Postman or any other API testing tool. Make sure to include the JWT token in the Authorization header for authenticated routes.

## Environment Variables

- `JWT_SECRET` - Secret key for JWT token generation and verification

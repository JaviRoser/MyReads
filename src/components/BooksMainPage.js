import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Book from "./Book";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class BooksMainPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  render() {
    const { books, moveBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookTitle="Currently Reading"
              books={books
                .filter(book => book.shelf === "currentlyReading")
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      moveBook={moveBook}
                      currentShelf={book.shelf}
                    />
                  </li>
                ))}
            />
            <BookShelf
              bookTitle="Want To Read"
              books={books
                .filter(book => book.shelf === "wantToRead")
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      moveBook={moveBook}
                      currentShelf={book.shelf}
                    />
                  </li>
                ))}
            />
            <BookShelf
              bookTitle="Read"
              books={books.filter(book => book.shelf === "read").map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    moveBook={moveBook}
                    currentShelf={book.shelf}
                  />
                </li>
              ))}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksMainPage;

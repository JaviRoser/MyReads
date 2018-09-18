import React, { Component } from "react";
import BookSearch from "./BookSearch";
import BookShelf from "./BookShelf";
import { PropTypes } from "prop-types";
import Book from "./Book";
import { BrowserRouter, Route, Link } from "react-router-dom";

class BooksMainPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  render() {
    const { books } = this.props;
    const { moveBook } = this.props;
    // list the books
    // console.log(this.props.books);
    //
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books
                .filter(book => book.shelf === "currentlyReading")
                .map(book => (
                  <li key={book.id}>
                    <Book book={book} moveBook={moveBook} />
                  </li>
                ))}
            />

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(book => book.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        <Book book={book} moveBook={moveBook} />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book => book.shelf === "read").map(book => (
                    <li key={book.id}>
                      <Book book={book} moveBook={moveBook} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
        <Link to="/search">
         
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksMainPage;

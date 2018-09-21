import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book"

class BookShelf extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	};
	render() {
		const { books, moveBook } = this.props;
		return (
			 <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
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
                </ol>
              </div>
            </div>
		);
	}
}

export default BookShelf;

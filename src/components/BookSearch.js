import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";
class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  state = {
    query: "",
    booksBeingSearched: [],
    bookNoFoundErr: false
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateTheBooksBeingSearched(query);
  };

  // Empty the array if not input

  updateTheBooksBeingSearched = query => {
    if (query === "" || query === undefined) {
      this.setState({
        booksBeingSearched: []
      });
    }
    /*if the word being type in is found by the search method
       A result is displayed. Otherwise the array is emptied */
    if (query) {
      BooksAPI.search(query).then(booksBeingSearchedResults => {
        //Credit to Maeva from the EMEA Grow with Google Scholarship

        booksBeingSearchedResults.error &&
        typeof booksBeingSearchedResults.length === "undefined"
          ? this.setState({ booksBeingSearched: [], bookNoFoundErr: true })
          : this.setState({
              booksBeingSearched: booksBeingSearchedResults,
              bookNoFoundErr: false
            });
      });
    } else {
      this.setState({
        booksBeingSearched: [],
        bookNoFoundErr: false
      });
    }
  };
  render() {
    const { moveBook, books } = this.props;
    const { query, booksBeingSearched, bookNoFoundErr } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/*Show the book results, and allow to move the books
        to the shelfs*/}

            {!bookNoFoundErr &&
              booksBeingSearched.map(booksBeingSearched => {
                let shelf = "none";
                books.forEach(books => {
                  books.id === booksBeingSearched.id
                    ? (shelf = books.shelf)
                    : "";
                });

                if (!booksBeingSearched.imageLinks) {
                  booksBeingSearched.imageLinks = {
                    thumbnail:
                      "https://www.marjon.ac.uk/margen/img/blankBook.png"
                  };
                }

                return (
                  <li key={booksBeingSearched.id}>
                    <Book
                      book={booksBeingSearched}
                      moveBook={moveBook}
                      currentShelf={shelf}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
        {/*Shows an error message if a book is not found*/}
        {bookNoFoundErr && (
          <div className="noBookFoundErr">
            <p>Sorry, No results! Please type in a new search.</p>
          </div>
        )}
      </div>
    );
  }
}
export default BookSearch;

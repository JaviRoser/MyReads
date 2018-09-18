import React, { Component } from "react";
import { Link } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import PropTypes from "prop-types";
import BooksMainPage from "./BooksMainPage";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class BookSearch extends Component {
  // static propTypes = {
  //  books: PropTypes.array.isRequired,

  // };
  state = {
    query: "",
    booksBeingSearched: []
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateTheBooksBeingSearched(query);
  };

  updateTheBooksBeingSearched = query => {
    /*if the word being type in is found by the search method
       A result is displayed. Otherwise the array is emptied */
    if (query) {
      BooksAPI.search(query).then(booksBeingSearched => {
        booksBeingSearched.error
          ? this.setState({ booksBeingSearched: [] })
          : this.setState({ booksBeingSearched: booksBeingSearched });
      });
    } else {
      this.setState({ booksBeingSearched: [],query:'' });
    }
  };

  render() {
    const { books } = this.props;
    const { query, booksBeingSearched } = this.state;
    // let showingBooks;
    // if (query) {
    //  const match = new RegExp(escapeRegExp(query), "i");
    //  showingBooks= booksBeingSearched.filter(booksBeingSearched =>
    //    // showingContacts = this.props.contacts.filter(contact =>
    //    match.test(booksBeingSearched.id)
    //  );
    // }
    //   else {
    //  showingBooks = booksBeingSearched;
    //  // showingContacts = this.props.contacts; After we declare at the beginning of the render we do not need to type this.props again
    // }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
          Close
        </Link>
          <div className="search-books-input-wrapper">
            {/*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            {booksBeingSearched.map(booksBeingSearched => (
              <li key={"booksBeingSearched.id"}>
                <Book
                  book={booksBeingSearched}
                  // moveBook={moveBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookSearch;

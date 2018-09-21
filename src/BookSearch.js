import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
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
      this.setState({ booksBeingSearched: [], query: "" });
    }
  };

  render() {
    const { moveBook } = this.props;
    const { query, booksBeingSearched } = this.state;
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
             {
              booksBeingSearched.map(booksBeingSearched => {
                const shelf='none'
                return (
                  
                  <li key={booksBeingSearched.id}>
                  <Book book={booksBeingSearched} 
                  moveBook={moveBook} 
                  currentShelf={shelf} />
                  </li>
                  )})
            }
             
          
       
          </ol>
        </div>
      </div>
    );
  }
}
export default BookSearch;

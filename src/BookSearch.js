import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import escapeRegExp from "escape-string-regexp";
import PropTypes from "prop-types";
import BooksMainPage from './BooksMainPage'

 class BookSearch extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		
	};
 	state={
 	
 		query:''
 	}
	render() {
    const  { books } = this.props;

		 const { query } = this.state;
		let showingBooks;
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), "i");
			showingBooks= books.filter(book =>
				// showingContacts = this.props.contacts.filter(contact =>
				match.test(book.id)
			);
		} 
    // else {
		// 	showingBooks = books;
		// 	// showingContacts = this.props.contacts; After we declare at the beginning of the render we do not need to type this.props again
		// }

		return (
			     <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {


                /*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author"
                // value={query}

                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
		);
	}
}
export default BookSearch;
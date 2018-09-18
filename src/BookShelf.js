import React, { Component } from "react";
// import BookShelf from "./BookShelf";
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {
	static propTypes={
	title:PropTypes.string.isRequired

}
	render() {
		 const { books } = this.props;
    const { moveBook } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title"> Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;

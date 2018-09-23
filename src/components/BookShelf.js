import React, { Component } from "react";

class BookShelf extends Component {
	render() {
		const { books, bookTitle } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{bookTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">{books}</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;

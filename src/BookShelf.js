import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelf extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	};
	render() {
		const { books, moveBook } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title"> Currently</h2>
				<div className="bookshelf-books">
					<ol className="books-grid" />
				</div>
			</div>
		);
	}
}

export default BookShelf;

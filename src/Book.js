import React, { Component } from "react";

class Book extends Component {
	render() {
		// console.log(this.props.books);
		const { book } = this.props;
		// const { bookCurrentShelf } = this.props;
		
// console.log(this.props.moveBook)
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${
								book.imageLinks.thumbnail
							}")`
						}}
					/>
					<div className="book-shelf-changer">
						<select onChange={(event)=>this.props.moveBook(
							book,event.target.value
							)}
						value={book.shelf}
						>

							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>


						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		);
	}
}
export default Book;

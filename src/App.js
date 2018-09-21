import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookSearch from "./BookSearch";
import BooksMainPage from "./BooksMainPage";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  /*Fetch the books from BooksAPI.js*/
  fetchAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  componentDidMount() {
    this.fetchAllBooks();
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.fetchAllBooks();
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksMainPage books={books} moveBook={this.moveBook} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <BookSearch books={books} moveBook={this.moveBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;

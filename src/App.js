import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import BookSearch from "./BookSearch";
import BooksMainPage from "./BooksMainPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  };


  /*Fetch the books using BooksAPI.js*/
  fetchAllBooks=()=>{
      BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
  {/*Change this to made the code simpler*/}
    this.fetchAllBooks();
  }

  render() {
    // console.log(this.props.books);
    return (
   <div className="app">
   <Route exact path="/" render={()=>
   (
   <BooksMainPage 

        books={this.state.books} 
        moveBook={this.moveBook} 
        /> 

   )  
   }
   />
    <Route exact path="/search" render={()=>
   ( <BookSearch/>
    )}
   />
      </div>
    );
  }
}

export default BooksApp;

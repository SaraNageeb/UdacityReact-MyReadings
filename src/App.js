import "./App.css";
import React, { useState, useEffect } from 'react'

 import Header from "./components/Header";
import StackShelves from "./components/StackShelves";
import Search from "./components/Search";
import * as BooksAPI from './BooksAPI'

function App() {
  const [books, setBooks] = useState([])
 //user can change book shef ////////////////////////////////
  const ChangeBookShelf = (bookInput, whereToInput) => {
    const updatedBooks = books.map(book => {
      if (book.id === bookInput.id) {
        book.shelf = whereToInput;
      }
      return book;
    })
    setBooks(updatedBooks);
    BooksAPI.update(bookInput, whereToInput);
  }
///////////////////////////////
// show all books on the shelf
  useEffect(() => {BooksAPI.getAll()
    .then(data => 
      {
        console.log(data)
        setBooks(data)
       }
    );
}, [])
////////////////////////////////////
  return (
    <div className="app">
        <div className="list-books">
          <Header/>
          <StackShelves books={books}
          ChangeBookShelf={ChangeBookShelf}/>
        </div>
          <Search/>
    </div>
  );
}

export default App;

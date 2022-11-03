import "./App.css";
import React, { useState, useEffect } from 'react'
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound"; 
import Search from "./pages/Search";
import * as BooksAPI from './BooksAPI'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [books, setBooks] = useState([])
 //user can change book shef ////////////////////////////////
  const ChangeBookShelf = async (selectedBook, moveTo) => {
    await BooksAPI.update(selectedBook, moveTo);
    const updatedBooks = books.map(book => {
      if (book.id === selectedBook.id) {
        book.shelf = moveTo;
      }
      return book;
    })
    setBooks(updatedBooks);
  
  }
//////////////////////////////
 
// show all books on the shelf
  useEffect(() => {
    
    const showBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    showBooks();
}, [])
////////////////////////////////////
  return (
    <div className="app">
         
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/search"element={<Search Shelfbooks={books}ChangeBookShelf={ChangeBookShelf}/>} />
          <Route exact path="/"element={<Home books={books}ChangeBookShelf={ChangeBookShelf}/> } />
        </Routes>
      </Router>




    </div>
  );
}

export default App;

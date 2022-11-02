import React from 'react'
import Shelf from './Shelf'
const StackShelves = ({books ,ChangeBookShelf}) => {
 const StackShelf = [
    {
      title: "Currently Reading",
      shelf: "currentlyReading"
    },
    {
      title: "Want To Read",
      shelf: "wantToRead"
    },
    {
      title: "Read",
      shelf: "read"
    },
]

  return (
     
    <div className="list-books-content">
        {StackShelf.map((bookshelf) => (
                <Shelf key={bookshelf.shelf}
                books={books.filter((book) => book.shelf === bookshelf.shelf)}
                title={bookshelf.title} 
                ChangeBookShelf={ChangeBookShelf}/>
         ))}
        {

        /*
               insted of repeating code like this 
        <Shelf books={books.filter((book) => book.shelf === "currentlyReading")} title="Currently Reading"/>                 
        <Shelf books={books.filter((book) => book.shelf === "wantToRead")} title="Want to Read"/>                 
        <Shelf books={books.filter((book) => book.shelf === "read")} title="Read"/>                 
    
        */
      }    
  </div>
  )
}

export default StackShelves
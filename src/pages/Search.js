import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

const Search = ({ Shelfbooks, ChangeBookShelf }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchBook(e.target.value);
  };
  const searchBook = async (query) => {
    if (!query) {
      setSearchBooks([]);
    }
    if (query.trim()) {
      const res = await BooksAPI.search(query.trim(), 20);

      if (res && !res.error) {
        const joinedBooks = res.map((book) => {
          Shelfbooks.forEach((Shelfbook) => {
            if (book.id === Shelfbook.id) {
              book = Shelfbook;
            }
          });
          return book;
        });
        setSearchBooks(joinedBooks);
      }
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query.length > 0 && searchBooks.length > 0 ? (
            searchBooks.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} ChangeBookShelf={ChangeBookShelf} />
                </li>
              );
            })
          ) : (
            <p>No books to show - search in the bar above.</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;

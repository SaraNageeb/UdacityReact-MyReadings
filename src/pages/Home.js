import { Link } from "react-router-dom";
import Header from '../components/Header'
import StackShelves from '../components/StackShelves'
const Home = ({books,ChangeBookShelf}) => {
  return (
    <div className="list-books">
      <Header />
      <StackShelves books={books} ChangeBookShelf={ChangeBookShelf} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home
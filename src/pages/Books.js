import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/book';
import './books.css';
import AddBook from '../components/addBook';
import { getListBook } from '../redux/books/books';

const Books = () => {
  const allBooks = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListBook());
  }, [dispatch]);

  return (
    <div className="books">
      <ul className="ulBooks">
        {allBooks.map((book) => (
          <li key={book.id} className="book"><Book id={book.id} title={book.title} author={book.author} /></li>
        ))}
      </ul>
      <div>
        <AddBook />
      </div>
    </div>
  );
};

export default Books;

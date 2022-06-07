import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/book';
import './books.css';
import AddBook from '../components/addBook';

const Books = () => {
  const allBooks = useSelector((state) => state.allBooks);
  console.log(allBooks);

  return (
    <div className="books">
      <ul className="ulBooks">
        <li className="book">
          {allBooks.map((book) => (
            <Book key={book.id} title={book.title} author={book.author} />
          ))}
        </li>
      </ul>
      <div>
        <AddBook />
      </div>
    </div>
  );
};

export default Books;

import React from 'react';
import Book from '../components/book';
import './books.css';
import AddBook from '../components/addBook';

const Books = () => {
  const allBooks = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

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

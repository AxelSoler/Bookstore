import React from 'react';
import Book from '../components/book';
import './books.css';
import AddBook from '../components/addBook';

const Books = () => (
  <div className="books">
    <ul className="ulBooks">
      <li className="book"><Book genre="Action" title="The Hunger Games" author="Suzanne Collins" /></li>
      <li className="book"><Book genre="Science Fiction" title="Dune" author="Frank Herbert" /></li>
      <li className="book"><Book title="Capital in the Twenty-First Century" author="Suzanne Collins" /></li>
    </ul>
    <div>
      <AddBook />
    </div>
  </div>
);

export default Books;

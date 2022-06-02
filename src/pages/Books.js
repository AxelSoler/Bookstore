import React from 'react';
import Book from '../components/book';
import './books.css';

const Books = () => (
  <div className="books">
    <ul className="ulBooks">
      <li className="book"><Book genre="Action" title="The Hunger Games" author="Suzanne Collins" /></li>
      <li className="book"><Book genre="Science Fiction" title="Dune" author="Frank Herbert" /></li>
      <li className="book"><Book genre="Economy" title="Capital in the Twenty-First Century" author="Suzanne Collins" /></li>
    </ul>
  </div>
);

export default Books;

import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/books';
import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    dispatch(addBookAPI({ id, title, author }));
    document.getElementById('form').reset();
  };

  return (
    <div className="addNewBook">
      <h2 id="addTitle">ADD NEW BOOK</h2>
      <form id="form" onSubmit={submitBook}>
        <input id="title" placeholder="Book title" required />
        <input id="author" placeholder="Author" required />
        <button id="addBtn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

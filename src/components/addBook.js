import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    dispatch(addNewBook({ id, title, author }));
    document.getElementById('form').reset();
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form id="form" onSubmit={submitBook}>
        <input id="title" placeholder="Book title" />
        <input id="author" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

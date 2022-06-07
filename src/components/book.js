import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBook = () => dispatch(deleteBook(id));

  return (
    <div className="bookSection">
      <div>
        <h3>
          {title}
        </h3>
        <h3>
          {author}
        </h3>
      </div>
      <div className="buttonSection">
        <button type="button">Comments</button>
        <button onClick={removeBook} type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

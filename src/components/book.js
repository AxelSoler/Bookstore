import PropTypes from 'prop-types';
import React from 'react';
import './book.css';

const Book = (props) => {
  const { title, author} = props;
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
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

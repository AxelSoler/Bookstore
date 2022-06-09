import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { deleteBookAPI } from '../redux/books/books';
import './book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBook = () => dispatch(deleteBookAPI(id));

  return (
    <div className="bookSection">
      <div className="leftPart">
        <div className="bookName">
          <h3>
            {title}
          </h3>
          <h4>
            {author}
          </h4>
        </div>
        <div className="buttonSection">
          <button type="button">Comments</button>
          <button onClick={removeBook} type="button">Remove</button>
          <button id="editBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="completed">
        <CircularProgressBar
          percent="15"
          animationSmooth="ls ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#0290ff"
          size={100}
        />
        <div className="completedBook">
          <p>15%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p>Current Chapter</p>
        <p>Chapter 4</p>
        <button type="button">
          Update progress
        </button>
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

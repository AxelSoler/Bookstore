import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { deleteBookAPI } from '../redux/books/books';
import './book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const randomPercentage = Math.round(Math.random() * 100);
  let randomChapter = ' ';
  randomChapter += Math.round(Math.random() * 10);
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
          <button className="bookBtn" type="button">Comments</button>
          <button className="bookBtn" onClick={removeBook} type="button">Remove</button>
          <button className="bookBtn" id="editBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="completed">
        <CircularProgressBar
          percent={randomPercentage}
          animationSmooth="ls ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#0290ff"
          size={100}
        />
        <div className="completedBook">
          <p>
            {randomPercentage}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          {randomChapter}
        </p>
        <button className="updateBtn" type="button">Update progress</button>
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

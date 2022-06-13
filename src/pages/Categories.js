import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';
import './categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <div className="Categories">
      <button onClick={() => dispatch(checkingStatus())} className="check" type="button">Check status</button>
      <h2>{categories}</h2>
    </div>
  );
};

export default Categories;

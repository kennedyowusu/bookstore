import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../redux/categories/categories';
import '../styles/categories.css';

const Categories = () => {
  const checkStatus = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(UPDATE_STATUS());
  };

  let statusText = 'No status yet';
  if (checkStatus && checkStatus !== '') {
    statusText = checkStatus;
  }

  return (
    <div className="category-container">
      <h2 className="status-text">{statusText}</h2>
      <button type="button" onClick={handleStatus} className="category-button">
        Check Status
      </button>
    </div>
  );
};

export default Categories;

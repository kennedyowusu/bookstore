import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../redux/categories/categories';

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
    <div>
      <h2>{statusText}</h2>
      <button type="button" onClick={handleStatus} style={{ backgroundColor: 'teal', color: 'white', padding: '10px' }}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;

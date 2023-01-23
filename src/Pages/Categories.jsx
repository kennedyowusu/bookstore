import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const checkStatus = useSelector((state) => state.categories);

  const handleStatus = () => {
    dispatch(UPDATE_STATUS());
  };

  let status = '';
  if (status.status && status.status !== '') {
    status = (
      <p>
        {checkStatus.status}
      </p>
    );
  } else {
    status = {
      status: 'Under Construction',
    };
  }

  return (
    <div>
      <h2>
        {checkStatus.status}
      </h2>
      <button type="submit" onClick={handleStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;

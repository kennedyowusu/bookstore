import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const SingleBook = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        border: '1px solid #e8e8e8',
        padding: '1rem',
        margin: '1rem',
      }}
    >
      <div key={id}>
        <div>
          <h4>{ id}</h4>
          <h4>{title}</h4>
          <h3>{author}</h3>
          <h3>{category}</h3>

          <button type="button" onClick={handleRemoveBook}>
            Remove
          </button>
        </div>
        <div>
          <span>Progress 80%</span>
        </div>
        <div>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SingleBook;

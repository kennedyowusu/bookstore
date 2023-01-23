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
    <div
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
      <li
        key={id}
      >
        <div>
          <span>{title}</span>
          <span>{author}</span>
          <span>{category}</span>

          <button type="submit" onClick={handleRemoveBook}>
            Remove
          </button>
        </div>
        <div>
          <span>Progress 80%</span>
        </div>
        <div>
          <span>Update Progress</span>
        </div>
      </li>
    </div>
  );
};

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SingleBook;

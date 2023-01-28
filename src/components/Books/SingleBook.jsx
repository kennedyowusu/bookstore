import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI, fetchBooks } from '../../redux/books/books';

const SingleBook = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li id={id}>
      <div>
        <div>
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
          <button type="button" onClick={() => dispatch(fetchBooks())}>
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SingleBook;

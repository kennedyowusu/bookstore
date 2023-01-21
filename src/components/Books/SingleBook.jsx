import PropTypes from 'prop-types';
import React from 'react';

const SingleBook = ({ title, author }) => (
  <div>
    <span>{title}</span>
    <span>{author}</span>

    <button type="submit">Remove Book</button>
  </div>
);

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SingleBook;

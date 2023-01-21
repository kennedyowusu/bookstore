import React from 'react';
import SingleBook from './SingleBook';

const showBook = ({ title, author }) => (
  <div>
    <h1>All Books</h1>
    <SingleBook
      title={title}
      author={author}
    />
  </div>
);

export default showBook;

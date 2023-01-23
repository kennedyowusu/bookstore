import React from 'react';
import SingleBook from './SingleBook';

const showBook = ({
  id, title, author, category,
}) => (
  <div>
    <SingleBook
      id={id}
      title={title}
      author={author}
      category={category}
    />
  </div>
);

export default showBook;

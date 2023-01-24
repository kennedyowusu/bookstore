import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const ShowBook = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      {books.map((book) => (
        <SingleBook
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default ShowBook;

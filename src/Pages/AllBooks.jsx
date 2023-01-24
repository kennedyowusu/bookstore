import React from 'react';
import { useSelector } from 'react-redux';
import InputForm from '../components/Books/InputForm';
import ShowBook from '../components/Books/ShowBook';

const AllBooks = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      {books.map((book) => (
        <ShowBook
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <InputForm />
    </div>
  );
};

export default AllBooks;

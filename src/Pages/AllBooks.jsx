import React from 'react';
import InputForm from '../components/Books/InputForm';
import ShowBook from '../components/Books/ShowBook';

const books = [
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
];

const AllBooks = () => (
  <div>
    {books.map((book) => (
      <ShowBook key={book.id} title={book.title} author={book.author} />
    ))}
    <InputForm />
  </div>
);

export default AllBooks;

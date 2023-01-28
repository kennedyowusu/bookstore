import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import { fetchBooks } from '../../redux/books/books';

const ShowBook = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
      {
        books.length === 0 && (
          <h3>No books added yet!!</h3>
        )
      }
    </div>
  );
};

export default ShowBook;

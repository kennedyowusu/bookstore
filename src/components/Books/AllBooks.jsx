import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import { fetchBooks } from '../../redux/books/books';
import '../../styles/all-books.css';

const ShowBook = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="all-books-container">
      <div className="books-list">
        {books.map((book) => (
          <SingleBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            percentage={book.percentage}
            chapterSlogan={book.chapterSlogan}
            chapterTitle={book.chapterTitle}
          />
        ))}
        {books.length === 0 && <h3 className="no-books">No books added yet!!</h3>}
      </div>
    </div>
  );
};

export default ShowBook;

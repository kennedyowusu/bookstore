import { createReducer, createAction } from '@reduxjs/toolkit';

// This is a string constant that will be used to identify the action type
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

// This is a function that returns an action object
export const addBook = createAction(ADD_BOOK);

export const removeBook = createAction(REMOVE_BOOK);

// This is a reducer function that will handle the action
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(addBook, (state, action) => {
    const { title, author, category } = action.payload;
    const newBook = {
      id:
        state.books.length === 0
          ? 1
          : state.books[state.books.length - 1].id + 1,
      title,
      author,
      category,
    };
    state.books.push(newBook);
  });
  builder.addCase(removeBook, (state, action) => {
    const { id } = action.payload;
    const updatedBookList = [
      ...state.books.filter((book) => book.id !== id),
    ];
    return {
      ...state,
      books: updatedBookList,
    };
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;

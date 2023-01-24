import { createReducer, createAction } from '@reduxjs/toolkit';

// This is a string constant that will be used to identify the action type
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hobbit',
      author: 'J.R.R',
      category: 'Action',
    },
  ],
};

// This is a function that returns an action object
export const addBook = createAction(ADD_BOOK);

export const removeBook = createAction(REMOVE_BOOK);

// This is a reducer function that will handle the action
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(addBook, (state, action) => {
    const newBook = {
      ...state, books: [...state.books, { ...action.payload, id: `${state.books.length + 1}` }],
    };
    return newBook;
  });
  builder.addCase(removeBook, (state, action) => {
    const updatedBookList = [state.books].filter((book) => book.id !== action.payload);
    return { ...state, books: updatedBookList };
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;

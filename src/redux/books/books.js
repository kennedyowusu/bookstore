import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Base URL for the API
axios.defaults.baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CcJg6US2jyLehx3DHzq9/books';

export const fetchBooks = createAsyncThunk(
  'bookStore/books/fetchBooks',
  async (thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchBooks.pending());
      const response = await axios.get();
      if (response.status === 200) {
        const newArr = [];
        Object.keys(...response.data).forEach((key) => {
          const obj = {
            id: key,
            title: response.data[key][0].title,
            author: response.data[key][0].author,
            category: response.data[key][0].category,
          };
          newArr.push(obj);
        });
        thunkAPI.dispatch(fetchBooks.fulfilled(newArr));
        return newArr || [];
      }
      if (response.status === 404) {
        thunkAPI.dispatch(fetchBooks.rejected());
        throw new Error('404 - Not Found');
      } else if (response.status === 500) {
        thunkAPI.dispatch(fetchBooks.rejected());
        throw new Error('500 - Internal Server Error');
      } else if (!response.data) {
        thunkAPI.dispatch(fetchBooks.rejected());
        throw new Error('No data found');
      }
    } catch (error) {
      thunkAPI.dispatch(fetchBooks.rejected());
      return thunkAPI.rejectWithValue(error.message);
    }
    return null;
  },
);

export const addBookToAPI = createAsyncThunk(
  'bookStore/books/addBookToAPI',
  async (book, thunkAPI) => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: book.category,
    };
    try {
      thunkAPI.dispatch(addBookToAPI.pending());
      const response = await axios.post('', {
        ...newBook,
      });

      if (response.status !== 201) {
        throw Error('Failed to post the book!');
      }

      return newBook;
    } catch (error) {
      thunkAPI.dispatch(addBookToAPI.rejected());
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeBookFromAPI = createAsyncThunk(
  'bookStore/books/removeBookFromAPI',
  async (book, thunkAPI) => {
    try {
      thunkAPI.dispatch(removeBookFromAPI.pending());
      const response = await axios.delete(`/${book}`);
      if (response.status !== 201) {
        throw Error('Failed to delete the book!');
      }
      thunkAPI.dispatch(removeBookFromAPI.fulfilled(book));
      return book;
    } catch (error) {
      thunkAPI.dispatch(removeBookFromAPI.rejected());
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  books: [],
};

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const newBook = {
      ...state,
      books: [...action.payload, ...state.books],
    };
    return newBook;
  });
  builder.addCase(removeBookFromAPI.fulfilled, (state, action) => {
    const updatedBookList = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBookList };
  });
  builder.addCase(addBookToAPI.fulfilled, (state, action) => {
    const newBook = {
      id: action.payload.item_id,
      title: action.payload.title,
      author: action.payload.author,
      category: action.payload.category,
    };
    const updatedBookList = [...state.books, newBook];
    return { ...state, books: updatedBookList };
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;

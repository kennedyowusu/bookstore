import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// This is a string constant that will be used to identify the action type
// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Base URL for the API
axios.defaults.baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7Y9Z3Z7YQ2Y0Z7Y2Z7Z2/books';

// This is an async thunk that will be used to fetch the books from the API
export const fetchBooks = createAsyncThunk('bookStore/books/fetchBooks',
  async (thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchBooks.pending());
      const response = await axios.get();
      if (response.status === 200) {
        const newArr = [];
        const data = Object.entries(...response.data);
        data.forEach((item) => {
          const obj = {
            id: item[0],
            title: item[1][0].title,
            author: item[1][0].author,
            category: item[1][0].category,
          };
          newArr.push(obj);
        });
        thunkAPI.dispatch(fetchBooks.fulfilled(newArr));
        return newArr || [];
      } if (response.status === 404) {
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
  });

// This is an async thunk that will be used to add a book to the API
export const addBookToAPI = createAsyncThunk('bookStore/books/addBookToAPI',
  async (book, thunkAPI) => {
    try {
      thunkAPI.dispatch(addBookToAPI.pending());
      const response = await axios.post('', {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      });
      if (response.status === 201) {
        thunkAPI.dispatch(addBookToAPI.fulfilled(response.data));
        return response.data || [];
      } if (response.status === 404) {
        thunkAPI.dispatch(addBookToAPI.rejected());
        throw new Error('404 - Not Found');
      } else if (response.status === 500) {
        thunkAPI.dispatch(addBookToAPI.rejected());
        throw new Error('500 - Internal Server Error');
      } else if (!response.data) {
        thunkAPI.dispatch(addBookToAPI.rejected());
        throw new Error('No data found');
      }
    } catch (error) {
      thunkAPI.dispatch(addBookToAPI.rejected());
      return thunkAPI.rejectWithValue(error.message);
    }
    return null;
  });

// This is an async thunk that will be used to remove a book from the API
export const removeBookFromAPI = createAsyncThunk('bookStore/books/removeBookFromAPI',
  async (book, thunkAPI) => {
    try {
      thunkAPI.dispatch(removeBookFromAPI.pending());
      const response = await axios.delete(`/${book}`);
      if (response.status === 200) {
        thunkAPI.dispatch(removeBookFromAPI.fulfilled(response.data));
        return response.data || [];
      } if (response.status === 404) {
        thunkAPI.dispatch(removeBookFromAPI.rejected());
        throw new Error('404 - Not Found');
      } else if (response.status === 500) {
        thunkAPI.dispatch(removeBookFromAPI.rejected());
        throw new Error('500 - Internal Server Error');
      } else if (!response.data) {
        thunkAPI.dispatch(removeBookFromAPI.rejected());
        throw new Error('No data found');
      }
    } catch (error) {
      thunkAPI.dispatch(removeBookFromAPI.rejected());
      return thunkAPI.rejectWithValue(error.message);
    }
    return null;
  });

// This is an async thunk that will be used to update a book from the API
const initialState = {
  books: [],
};

// This is a function that returns an action object
// export const addBook = createAction(ADD_BOOK);

// export const removeBook = createAction(REMOVE_BOOK);

// This is a reducer function that will handle the action
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    fetchBooks.fulfilled, (state, action) => {
      const newBook = {
      // add the new book to the beginning of the array instead of the end
        ...state, books: [{ ...action.payload }, ...state.books],
      };
      return newBook;
    },
  );
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

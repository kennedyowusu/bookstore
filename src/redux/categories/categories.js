import { createReducer, createAction } from '@reduxjs/toolkit';

export const UPDATE_STATUS = createAction('bookStore/categories/UPDATE_STATUS');

const initialState = {
  status: '',
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(UPDATE_STATUS, (state) => {
    const updatedCategories = {
      ...state,
      status: 'Under Construction',
    };
    return updatedCategories;
  });
  builder.addDefaultCase((state) => state);
});

export default categoriesReducer;

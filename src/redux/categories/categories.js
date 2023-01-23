import { createReducer, createAction } from '@reduxjs/toolkit';

const UPDATE_STATUS = 'bookStore/categories/UPDATE_STATUS';

const initialState = {
  categories: [],
};

const updateStatus = createAction(UPDATE_STATUS);

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateStatus, (state) => {
    const updatedCategories = {
      ...state.categories,
      status: 'Under Construction',
    };
    return updatedCategories;
  });
  builder.addDefaultCase((state) => state);
});

export { updateStatus, categoriesReducer };

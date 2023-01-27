import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  errorMessage: '',
  openDialog: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    pendingState: (state) => {
      const newState = {
        ...state,
        loading: true,
        hasErrors: false,
        errorMessage: '',
        openDialog: true,
      };
      return newState;
    },
    success: (state) => {
      const newState = {
        ...state,
        loading: false,
        hasErrors: false,
        errorMessage: '',
        openDialog: true,
      };
      return newState;
    },
    rejected: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        hasErrors: true,
        errorMessage: action.payload,
        openDialog: true,
      };
      return newState;
    },
    closeDialog: (state) => {
      const newState = {
        ...state,
        loading: false,
        hasErrors: false,
        errorMessage: '',
        openDialog: false,
      };
      return newState;
    },
  },
});

export const dialog = dialogSlice.actions;
export default dialogSlice.reducer;

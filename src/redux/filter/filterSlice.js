import { createSlice } from '@reduxjs/toolkit';
import { initialStateFilter } from './initialState';
import { reducersFilter } from './reducers';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: reducersFilter,
});

// Action creators are generated for each case reducer function
export const { deleteContact, addContact } = filterSlice.actions;

export default filterSlice.reducer;

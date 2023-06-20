import { createSlice } from '@reduxjs/toolkit';
import { initialStateContacts } from './initialState';
import { reducersContacts } from './reducers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: reducersContacts,
});

// Action creators are generated for each case reducer function
export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;

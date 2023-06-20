export const reducersContacts = {
  deleteContact: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },

  addContact: (state, { payload }) => {
    return [...state, payload];
  },
};

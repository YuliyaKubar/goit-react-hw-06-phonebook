export const reducersContacts = {
  deleteContact: (state, { payload }) => {
    state.contacts = state.contacts.filter(contact => contact.id !== payload);
  },

  addContact: (state, { payload }) => {
    console.log(payload);
    state.contacts.push(payload);
  },
};

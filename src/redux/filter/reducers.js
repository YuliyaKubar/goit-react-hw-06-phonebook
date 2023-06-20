export const reducersFilter = {
  changeContact: (state, { payload }) => {
    state.filter = payload;
  },
};

// export const AllHandleFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.items = payload;
// };

export const RegisterHandleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

// export const DelHandleFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   const index = state.items.findIndex(contact => contact.id === payload.id);
//   state.items.splice(index, 1);
// };

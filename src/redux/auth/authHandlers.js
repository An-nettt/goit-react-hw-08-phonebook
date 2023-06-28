export const RegisterHandleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const LogInHandleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const LogOutHandleFulfilled = state => {
  state.user = '';
  state.token = '';
  state.isLoggedIn = false;
};

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
  state.isRefreshing = false;
};

export const RefreshHandlePending = state => {
  state.isRefreshing = true;
};

export const RefreshHandleFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

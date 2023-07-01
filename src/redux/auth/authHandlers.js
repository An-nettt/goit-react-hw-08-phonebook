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

export const LogInHandleRejected = state => {
  state.isLoading = false;
  state.isError = true;
};

export const LogOutHandleFulfilled = state => {
  state.user = '';
  state.token = '';
  state.isLoggedIn = false;
};

export const RefreshHandlePending = state => {
  state.isRefreshing = true;
};

export const RefreshHandleFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const RefreshHandleRejected = (state, { payload }) => {
  state.isRefreshing = false;
};

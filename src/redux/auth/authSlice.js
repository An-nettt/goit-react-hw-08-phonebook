import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register, getCurrentUser } from './authThunks';
import {
  LogInHandleFulfilled,
  LogOutHandleFulfilled,
  RegisterHandleFulfilled,
  RefreshHandlePending,
  RefreshHandleFulfilled,
  LogInHandleRejected,
  RefreshHandleRejected,
} from './authHandlers';
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearError(state) {
      state.isError = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, RegisterHandleFulfilled)
      // .addCase(register.rejected, handleRejected)

      .addCase(login.fulfilled, LogInHandleFulfilled)
      .addCase(login.rejected, LogInHandleRejected)

      .addCase(logout.fulfilled, LogOutHandleFulfilled)
      // .addCase(logout.rejected, handleRejected)

      .addCase(getCurrentUser.pending, RefreshHandlePending)
      .addCase(getCurrentUser.fulfilled, RefreshHandleFulfilled)
      .addCase(getCurrentUser.rejected, RefreshHandleRejected);
  },
});

export const { clearError } = authSlice.actions;

console.log(authSlice.reducer.clearError);
export const authReducer = authSlice.reducer;

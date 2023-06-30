import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register, getCurrentUser } from './authThunks';
import {
  LogInHandleFulfilled,
  LogOutHandleFulfilled,
  RegisterHandleFulfilled,
  RefreshHandlePending,
  RefreshHandleFulfilled,
  handleRejected,
} from './authHandlers';
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearError: state => {
      state.isError = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, RegisterHandleFulfilled)
      .addCase(register.rejected, handleRejected)

      .addCase(login.fulfilled, LogInHandleFulfilled)
      .addCase(login.rejected, handleRejected)

      .addCase(logout.fulfilled, LogOutHandleFulfilled)
      .addCase(logout.rejected, handleRejected)

      .addCase(getCurrentUser.pending, RefreshHandlePending)
      .addCase(getCurrentUser.fulfilled, RefreshHandleFulfilled)
      .addCase(getCurrentUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

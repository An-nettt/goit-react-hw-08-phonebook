import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register, getCurrentUser } from './authThunks';
import {
  LogInHandleFulfilled,
  LogOutHandleFulfilled,
  RegisterHandleFulfilled,
  RefreshHandleFulfilled,
} from './authHandlers';
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, RegisterHandleFulfilled)

      //   .addCase(login.pending, handlePending);
      .addCase(login.fulfilled, LogInHandleFulfilled)
      //   .addCase(login.rejected, handleRejected);

      .addCase(logout.fulfilled, LogOutHandleFulfilled)
      .addCase(getCurrentUser.fulfilled, RefreshHandleFulfilled);
  },
});

export const authReducer = authSlice.reducer;

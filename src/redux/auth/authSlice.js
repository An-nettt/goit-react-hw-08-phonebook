import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register, getCurrentUser } from './authThunks';
import {
  LogInHandleFulfilled,
  LogOutHandleFulfilled,
  RegisterHandleFulfilled,
  RefreshHandlePending,
  RefreshHandleFulfilled,
} from './authHandlers';
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, RegisterHandleFulfilled)

      .addCase(login.fulfilled, LogInHandleFulfilled)

      .addCase(logout.fulfilled, LogOutHandleFulfilled)

      .addCase(getCurrentUser.pending, RefreshHandlePending)
      .addCase(getCurrentUser.fulfilled, RefreshHandleFulfilled);
  },
});

export const authReducer = authSlice.reducer;

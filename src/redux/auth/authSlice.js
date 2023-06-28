import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from './authThunks';
import {
  LogInHandleFulfilled,
  LogOutHandleFulfilled,
  RegisterHandleFulfilled,
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

      //   .addCase(deleteContact.pending, handlePending)
      .addCase(logout.fulfilled, LogOutHandleFulfilled);
    //   .addCase(deleteContact.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

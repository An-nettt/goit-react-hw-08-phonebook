import { createSlice } from '@reduxjs/toolkit';

import { register } from './authThunks';
import { RegisterHandleFulfilled } from './authHandlers';
const { authInitialState } = require('./authInitialState');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, RegisterHandleFulfilled);

    //   .addCase(login.pending, handlePending);
    //   .addCase(login.fulfilled, AddHandleFulfilled)
    //   .addCase(login.rejected, handleRejected);

    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, DelHandleFulfilled)
    //   .addCase(deleteContact.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

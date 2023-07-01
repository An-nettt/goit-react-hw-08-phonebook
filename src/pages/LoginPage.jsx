import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Box } from '@mui/material';
import Notiflix from 'notiflix';

import { login } from 'redux/auth/authThunks';
import { getIsError } from 'redux/auth/authSelectors';
import { clearError } from 'redux/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(getIsError);

  useEffect(() => {
    if (isError) {
      Notiflix.Notify.failure('Incorrect email or password');
      dispatch(clearError());
    }
  }, [dispatch, isError]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, ml: '20px', width: '60vw' }}
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? REGISTER"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default LoginPage;

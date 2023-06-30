import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button, Box } from '@mui/material';
// import * as yup from 'yup';

import { login } from 'redux/auth/authThunks';

const LoginPage = () => {
  const dispatch = useDispatch();

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
  );
};

//   const validationSchema = yup.object({
//     email: yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: values => {
//       setEmail(values.email);
//       setPassword(values.password);
//       console.log({ email, password });
//     },
//   });

//

export default LoginPage;

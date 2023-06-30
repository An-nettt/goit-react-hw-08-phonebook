// import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authThunks';

// const RegisterPage = () => {
//   const dispatch = useDispatch;
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

// const validationSchema = yup.object({
//   name: yup.string('Enter your name').required('Name is required'),
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
      sx={{ mt: 1 }}
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* <form onSubmit={handleSubmit} > */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
          />
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
            REGISTER
          </Button>

          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {'Already have an account? LOGIN'}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;

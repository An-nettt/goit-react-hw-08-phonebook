// import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

//   const formik = useFormik({
//     initialValues: authInitialState,
//     validationSchema: validationSchema,
//     onSubmit: values => {
//       dispatch(
//         register({
//           name: values.name,
//           email: values.email,
//           password: values.password,
//         })
//       );
//       // setName(values.name);
//       // setEmail(values.email);
//       // setPassword(values.password);
//       console.log({ name, email, password });
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="name"
//           name="name"
//           label="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//         />
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Register
//         </Button>
//
//       </form>
//     </div>
//   );
// };

export default RegisterPage;

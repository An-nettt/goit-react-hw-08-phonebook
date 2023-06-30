import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';

import Home from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import Contacts from 'pages/ContactsPage';
// import NotFound from 'pages/NotFound';

import { PrivateRoute } from './Header/PrivateRoute';
import { RestrictedRoute } from './Header/RestrictedRoute';

import { getCurrentUser } from 'redux/auth/authThunks';
import Header from './Header/AppBar';
import NotFound from 'pages/NotFoundPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              element={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute element={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} redirectTo="/login" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';

import Header from './Header/AppBar';
import { PrivateRoute } from './Header/PrivateRoute';
import { RestrictedRoute } from './Header/RestrictedRoute';

import { getCurrentUser } from 'redux/auth/authThunks';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Suspense fallback={<Loader />}>
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
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

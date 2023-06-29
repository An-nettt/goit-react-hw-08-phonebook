import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import Contacts from 'pages/ContactsPage';
// import NotFound from 'pages/NotFound';

import Header from './Header/AppBar';
import { PrivateRoute } from './Header/PrivateRoute';
import { RestrictedRoute } from './Header/RestrictedRoute';

import { getCurrentUser } from 'redux/auth/authThunks';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
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

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

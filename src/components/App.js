import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
// import NotFound from 'pages/NotFound';
import Register from 'pages/RegisterPage';
import Contacts from 'pages/ContactsPage';
import Header from './Header/AppBar';
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

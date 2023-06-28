import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
// import NotFound from 'pages/NotFound';
import Register from 'pages/RegisterPage';
import Contacts from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/AppBar';

export default function App() {
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

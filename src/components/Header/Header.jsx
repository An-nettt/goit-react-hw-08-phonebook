import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/register">Register</NavLink>

        {/* <NavLink to="/login">Login</NavLink> */}
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <button onClick={() => navigate('/login')}>Login</button>
    </>
  );
};

export default Header;

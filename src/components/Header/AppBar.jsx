import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default Header;

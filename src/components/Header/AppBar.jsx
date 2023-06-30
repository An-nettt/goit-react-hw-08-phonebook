import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            underline="none"
            color="primary"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link
              component={NavLink}
              to="/"
              end
              color="secondary"
              underline="none"
              sx={{ mr: '20px' }}
            >
              PHONEBOOK
            </Link>
            {isLoggedIn && (
              <Link
                component={NavLink}
                to="/contacts"
                end
                color="secondary"
                underline="none"
              >
                CONTACTS
              </Link>
            )}
          </Typography>

          <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

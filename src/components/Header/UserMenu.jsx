import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authThunks';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Welcome, {name} </span>

      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={() => dispatch(logout())}
        sx={{ color: 'theme.text.primary.main' }}
      >
        LogOut
      </Button>
    </div>
  );
}

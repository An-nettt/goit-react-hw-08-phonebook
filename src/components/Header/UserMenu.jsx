import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authThunks';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Welcome, {name} </span>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
}

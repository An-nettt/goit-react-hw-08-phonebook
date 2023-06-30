import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AuthNav() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        sx={{ mr: '10px' }}
        onClick={() => {
          navigate('/register');
        }}
      >
        Register
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </Button>
    </div>
  );
}

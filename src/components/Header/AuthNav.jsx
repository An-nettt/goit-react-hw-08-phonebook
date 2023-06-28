import { useNavigate } from 'react-router-dom';

export default function AuthNav() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/register')}>Register</button>

      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

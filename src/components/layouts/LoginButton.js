import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login" className="btn-dark">
      Login
    </Link>
  );
};

export default LoginButton;

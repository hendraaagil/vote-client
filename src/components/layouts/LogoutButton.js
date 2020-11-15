import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Link
      to="/login"
      className="btn-red hover:bg-transparent hover:text-red-700"
    >
      Logout
    </Link>
  );
};

export default LogoutButton;

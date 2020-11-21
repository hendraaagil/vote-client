import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const LogoutButton = (props) => {
  const { clearUser } = useContext(AuthContext);

  const logoutClick = () => {
    console.log(props);
    clearUser();
    props.history.push('/login');
  };

  return (
    <button className="btn-red" onClick={logoutClick}>
      Logout
    </button>
  );
};

export default withRouter(LogoutButton);

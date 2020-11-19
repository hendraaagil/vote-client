import { withRouter } from 'react-router-dom';

const LogoutButton = (props) => {
  const logoutClick = () => {
    console.log(props);
    props.history.push('/login');
  };

  return (
    <button className="btn-red" onClick={logoutClick}>
      Logout
    </button>
  );
};

export default withRouter(LogoutButton);

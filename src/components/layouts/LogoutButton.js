import { withRouter } from 'react-router-dom';

const LogoutButton = (props) => {
  const logoutClick = () => {
    console.log(props);
    props.history.push('/login');
  };

  return (
    <button
      className="btn-red hover:bg-transparent hover:text-red-700"
      onClick={logoutClick}
    >
      Logout
    </button>
  );
};

export default withRouter(LogoutButton);

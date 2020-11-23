import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

const LogoutButton = (props) => {
  const { clearUser } = useContext(AuthContext);
  const { clearCandidate } = useContext(CandidateContext);

  const logoutClick = () => {
    clearUser();
    clearCandidate();
    props.history.push('/login');
  };

  return (
    <button className="btn-red" onClick={logoutClick}>
      Logout
    </button>
  );
};

export default withRouter(LogoutButton);

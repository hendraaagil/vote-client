import { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

import Card from '../layouts/Card';
import LoginButton from '../layouts/LoginButton';
import LogoutButton from '../layouts/LogoutButton';

const Home = (props) => {
  console.log(props);
  const { user } = useContext(AuthContext);
  const { getCandidates, candidates } = useContext(CandidateContext);

  useEffect(() => {
    axios
      .get('/candidates')
      .then((response) => {
        getCandidates(response.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-8 text-gray-900">
      {user ? (
        <h1 className="mb-2 py-4 font-bold text-2xl text-center shadow">
          Halo, Selamat Datang {user.fullName} !
        </h1>
      ) : (
        <h1 className="mb-2 py-4 font-bold text-2xl text-center shadow">
          Halo, Selamat Datang !
        </h1>
      )}
      <h1 className="mt-6 mb-10 font-bold text-4xl text-center">
        Tentukan Pilihanmu!
      </h1>
      <Card candidates={candidates} />
      <div className="flex justify-center mt-10">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default withRouter(Home);

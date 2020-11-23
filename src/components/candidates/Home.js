import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import Card from '../layouts/Card';
import LoginButton from '../layouts/LoginButton';
import LogoutButton from '../layouts/LogoutButton';

const Home = (props) => {
  console.log(props);
  const [candidates, setCandidates] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get('/candidates')
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-4 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-8 text-blueGray-800">
      <h1 className="mb-2 py-4 px-2 font-bold text-lg sm:text-2xl text-center shadow">
        {user
          ? `Halo, Selamat Datang ${user.fullName} !`
          : 'Halo, Selamat Datang !'}
      </h1>
      <h1 className="my-6 font-bold text-2xl sm:text-4xl text-center">
        Tentukan Pilihanmu !
      </h1>
      <Card candidates={candidates} />
      <div className="flex justify-center mt-10">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default withRouter(Home);

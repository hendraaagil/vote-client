import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import Card from '../layouts/Card';
import Loader from '../layouts/Loader';
import LoginButton from '../layouts/LoginButton';
import LogoutButton from '../layouts/LogoutButton';

const Home = () => {
  const [candidates, setCandidates] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [progress, setProgress] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoad(true);
    setProgress(60);
    axios
      .get('/candidates')
      .then((response) => {
        setCandidates(response.data);
        setIsLoad(false);
        setProgress(100);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pt-4 pb-2 px-4 sm:pt-8 sm:pb-4 sm:px-8 text-blueGray-800">
      <LoadingBar color="#1E293B" progress={progress} />
      <h1 className="mb-2 py-4 px-2 font-bold text-lg sm:text-2xl text-center shadow">
        {user
          ? `Halo, Selamat Datang ${user.fullName} !`
          : 'Halo, Selamat Datang !'}
      </h1>
      <h1 className="my-6 font-bold text-2xl sm:text-4xl text-center">
        Tentukan Pilihanmu !
      </h1>
      {isLoad ? <Loader /> : <Card candidates={candidates} />}
      <div className="flex justify-center mt-10">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default withRouter(Home);

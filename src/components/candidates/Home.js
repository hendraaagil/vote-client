import { useEffect, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

import Card from '../layouts/Card';
import LogoutButton from '../layouts/LogoutButton';

const Home = (props) => {
  console.log(props);
  const { id, getUser, user } = useContext(AuthContext);
  const { getCandidates, candidates } = useContext(CandidateContext);

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        getUser(response.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [id]);

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
      <h1 className="mb-2 py-4 font-bold text-2xl text-center shadow">
        Halo, Selamat Datang {user.fullName} !
      </h1>
      <h1 className="mt-6 mb-10 font-bold text-4xl text-center">
        Tentukan Pilihanmu!
      </h1>
      <Card candidates={candidates} />
      <div className="flex justify-center mt-10">
        {id ? (
          <LogoutButton />
        ) : (
          <Link to="/login" className="btn-dark">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Home);

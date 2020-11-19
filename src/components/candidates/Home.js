import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import Card from '../layouts/Card';
import LogoutButton from '../layouts/LogoutButton';

const Home = (props) => {
  console.log(props);
  const [name, setName] = useState('');
  const id = props.location.search.slice(1);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        const { _id, fullName } = response.data;
        setName(fullName);
        authContext.login(_id);
      })
      .catch((error) => console.log(error));
  }, [id, authContext]);

  return (
    <div className="p-8 text-gray-900">
      <h1 className="mb-2 py-4 font-bold text-2xl text-center shadow">
        Halo, Selamat Datang {name} !
      </h1>
      <h1 className="mt-6 mb-10 font-bold text-4xl text-center">
        Tentukan Pilihanmu!
      </h1>
      <Card candidates={props.candidates} />
      <div className="flex justify-center mt-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default withRouter(Home);

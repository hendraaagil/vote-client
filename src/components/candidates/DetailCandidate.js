import { useContext } from 'react';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import LogoutButton from '../layouts/LogoutButton';

const DetailCandidate = (props) => {
  const authContext = useContext(AuthContext);
  const { _id, username, fullName, voted } = authContext.user;

  const candidate = props.location.candidate;
  console.log(candidate);
  console.log(authContext.user);

  const backHandler = () => {
    props.history.push('/vote');
  };

  const chooseHandler = () => {
    console.log(candidate.number, username, fullName);
    axios
      .post('/send-result', {
        candidateNumber: candidate.number,
        username,
        fullName,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    axios
      .put(`/users/${_id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    props.history.push('/voted');
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      <div className="col-span-1">
        <img
          className="w-full rounded shadow-lg"
          src={candidate.photoLink}
          alt="Candidate"
        />
        <h2 className="mt-4 text-2xl font-bold">{candidate.leader}</h2>
        <h2 className="mt-4 mb-10 text-2xl font-bold">{candidate.coLeader}</h2>
        <div className="flex justify-between">
          <button className="btn-dark" onClick={backHandler}>
            Kembali
          </button>
          {voted ? (
            <LogoutButton />
          ) : (
            <button className="btn-green" onClick={chooseHandler}>
              Pilih
            </button>
          )}
        </div>
      </div>
      <div className="py-2 px-4">
        <h1 className="text-3xl font-bold">Program Utama :</h1>
        <p className="pl-4 text-lg font-semibold">{candidate.mainProgram}</p>
        <h1 className="mt-4 text-2xl font-bold">Visi :</h1>
        <ul>
          {candidate.vision.map((v, i) => (
            <li className="pl-4 text-lg font-semibold" key={i}>
              {i + 1}. {v}
            </li>
          ))}
        </ul>
        <h1 className="mt-4 text-2xl font-bold">Misi :</h1>
        <ul>
          {candidate.mission.map((m, i) => (
            <li className="pl-4 text-lg font-semibold" key={i}>
              {i + 1}. {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailCandidate;

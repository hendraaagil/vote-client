import { useContext } from 'react';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

import LogoutButton from '../layouts/LogoutButton';

const DetailCandidate = (props) => {
  const { user } = useContext(AuthContext);
  const { _id, username, fullName, voted } = user;
  const { candidate } = useContext(CandidateContext);

  console.log(candidate);
  console.log(user);

  const backHandler = () => {
    props.history.push('/vote');
  };

  const chooseHandler = () => {
    console.log(candidate.number, username, fullName);
    axios
      .post('/result', {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:pt-10 sm:pb-6 sm:px-10 text-blueGray-800">
      <div className="col-span-1">
        <img
          className="w-full rounded shadow-lg"
          src={candidate.photoLink}
          alt="Candidate"
        />
        <h2 className="mt-4 text-2xl font-bold text-center sm:text-left">
          {candidate.leader}
        </h2>
        <h2 className="my-4 text-2xl font-bold text-center sm:text-left">
          {candidate.coLeader}
        </h2>
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
      <div className="p-0 sm:py-2 sm:px-4">
        <h1 className="text-3xl font-bold">Program Utama :</h1>
        <p className="pl-4 text-lg font-semibold">{candidate.mainProgram}</p>
        <h1 className="mt-4 text-2xl font-bold">Visi :</h1>
        <ul>
          {candidate.vision &&
            candidate.vision.map((v, i) => (
              <li className="pl-4 text-lg font-semibold" key={i}>
                {i + 1}. {v}
              </li>
            ))}
        </ul>
        <h1 className="mt-4 text-2xl font-bold">Misi :</h1>
        <ul>
          {candidate.mission &&
            candidate.mission.map((m, i) => (
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

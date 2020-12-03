import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

const Card = (props) => {
  const { user } = useContext(AuthContext);
  const { getCandidate } = useContext(CandidateContext);
  const [progress, setProgress] = useState(0);

  const detailHandler = (candidateId, number) => {
    setProgress(80);
    axios
      .get(`/candidates/${candidateId}`)
      .then((response) => {
        setProgress(100);
        getCandidate(response.data);
        props.history.replace(`/vote/${number}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col gap-8 sm:flex-row text-blueGray-800">
      <LoadingBar color="#1E293B" progress={progress} />
      {props.candidates.map((candidate) => {
        return (
          <div
            className="mx-0 sm:mx-4 pb-5 rounded overflow-hidden shadow-lg"
            key={candidate._id}
          >
            <img className="w-full" src={candidate.photoLink} alt="Candidate" />
            <h1 className="mt-4 text-4xl font-bold text-center">
              {candidate.number}
            </h1>
            <div className="px-6 py-4 text-center">
              <h2 className="font-bold text-xl mb-2">{candidate.leader}</h2>
              <p className="text-blueGray-800 text-base">Ketua</p>
            </div>
            <div className="px-6 py-2 text-center">
              <h2 className="font-bold text-xl mb-2">{candidate.coLeader}</h2>
              <p className="text-blueGray-800 text-base mb-8">Wakil Ketua</p>
              {user ? (
                <button
                  className="btn-dark"
                  onClick={() => detailHandler(candidate._id, candidate.number)}
                >
                  Detail
                </button>
              ) : (
                <h2 className="font-bold text-lg sm:text-xl mb-2">
                  Silahkan login terlebih dahulu !
                </h2>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(Card);

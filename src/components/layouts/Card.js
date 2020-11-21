import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';
import { CandidateContext } from '../../contexts/CandidateContext';

const Card = (props) => {
  const { user } = useContext(AuthContext);
  const { getCandidate } = useContext(CandidateContext);
  console.log(props);

  const detailHandler = (candidateId, number) => {
    axios
      .get(`/candidates/${candidateId}`)
      .then((response) => {
        getCandidate(response.data);
        props.history.replace(`/vote/${number}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex text-blueGray-800">
      {props.candidates.map((candidate) => {
        return (
          <div
            className="mx-4 pb-5 rounded overflow-hidden shadow-lg"
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
                <h2 className="font-bold text-xl mb-2">
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

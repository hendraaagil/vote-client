import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Card = ({ candidates }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex">
      {candidates.map((candidate) => {
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
              <p className="text-gray-700 text-base">Ketua</p>
            </div>
            <div className="px-6 py-2 text-center">
              <h2 className="font-bold text-xl mb-2">{candidate.coLeader}</h2>
              <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
              {user ? (
                <Link
                  to={{
                    pathname: `/vote/${candidate.number}`,
                    candidate,
                  }}
                  className="btn-dark"
                >
                  Detail
                </Link>
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

export default Card;

import { Link } from 'react-router-dom';

const Card = ({ candidates }) => {
  return (
    <div className="flex">
      {candidates.map((candidate) => {
        return (
          <div
            className="mx-4 pb-5 rounded overflow-hidden shadow-lg"
            key={candidate._id}
          >
            <img className="w-full" src={candidate.photoLink} alt="Candidate" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{candidate.leader}</div>
              <p className="text-gray-700 text-base">Ketua</p>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{candidate.coLeader}</div>
              <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
              <Link
                to={{
                  pathname: `/vote/${candidate._id}`,
                  candidate,
                }}
                className="btn-dark py-2 px-8 hover:bg-transparent hover:text-gray-900"
              >
                Detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

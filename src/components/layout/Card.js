import { Link } from 'react-router-dom';

import candidateImg from '../../assets/images/candidate.jpg';

const Card = (props) => {
  return (
    <div className="flex">
      {props.candidates.map((candidate) => {
        return (
          <div
            className="mx-4 pb-5 rounded overflow-hidden shadow-lg"
            key={candidate.id}
          >
            <img className="w-full" src={candidateImg} alt="Candidate" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{candidate.ketua}</div>
              <p className="text-gray-700 text-base">Ketua</p>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{candidate.wakil}</div>
              <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
              <Link
                to={{
                  pathname: `/vote/${candidate.id}`,
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

import { Link } from 'react-router-dom';

import Candidate from '../../assets/images/candidate.jpg';

const Card = () => {
  return (
    <div className="flex">
      <div className="mx-4 pb-5 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Candidate} alt="Candidate" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Upin</div>
          <p className="text-gray-700 text-base">Ketua</p>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Ipin</div>
          <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
          <Link
            to="/vote"
            className="btn-dark py-2 px-8 hover:bg-transparent hover:text-gray-900"
          >
            Detail
          </Link>
        </div>
      </div>
      <div className="mx-4 pb-5 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Candidate} alt="Candidate" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Upin</div>
          <p className="text-gray-700 text-base">Ketua</p>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Ipin</div>
          <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
          <Link
            to="/vote"
            className="btn-dark py-2 px-8 hover:bg-transparent hover:text-gray-900"
          >
            Detail
          </Link>
        </div>
      </div>
      <div className="mx-4 pb-5 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Candidate} alt="Candidate" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Upin</div>
          <p className="text-gray-700 text-base">Ketua</p>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Ipin</div>
          <p className="text-gray-700 text-base mb-8">Wakil Ketua</p>
          <Link
            to="/vote"
            className="btn-dark py-2 px-8 hover:bg-transparent hover:text-gray-900"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

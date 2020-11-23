import { Link } from 'react-router-dom';

import Welcome from './layouts/Welcome';

const Landing = () => {
  return (
    <div className="py-4 px-2 sm:p-16 flex flex-col items-center sm:flex-row text-blueGray-800">
      <Welcome />
      <div className="flex justify-center items-center w-full sm:w-1/2">
        <Link to="/login" className="btn-dark my-10">
          Vote Sekarang !
        </Link>
      </div>
    </div>
  );
};

export default Landing;

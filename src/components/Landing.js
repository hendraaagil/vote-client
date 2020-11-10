import { Link } from 'react-router-dom';

import Welcome from './layout/Welcome';

const Landing = (props) => {
  console.log(props);
  return (
    <div className="p-20 flex text-gray-900">
      <Welcome />
      <div className="flex justify-center items-center w-1/2">
        <Link
          to="/login"
          className="btn-dark px-10 py-4 hover:bg-transparent hover:text-gray-900"
        >
          Vote Sekarang!
        </Link>
        <h2>{props.data.text}</h2>
        <p>{props.data.author}</p>
      </div>
    </div>
  );
};

export default Landing;

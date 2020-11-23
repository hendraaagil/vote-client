import { Link } from 'react-router-dom';

import notFound from '../../assets/images/not-found.svg';

const NotFound = () => {
  return (
    <div className="flex flex-col text-blueGray-800 items-center p-8">
      <h1 className="mb-6 font-bold text-xl sm:text-2xl lg:text-4xl text-center">
        Ups! Halaman tidak ditemukan
      </h1>
      <img src={notFound} alt="Not Found" className="p-6 sm:w-1/2" />
      <Link to="/" className="btn-dark mt-6">
        Kembali ke halaman utama
      </Link>
    </div>
  );
};

export default NotFound;

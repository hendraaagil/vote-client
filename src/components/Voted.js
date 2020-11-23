import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import thanks from '../assets/images/thanks.svg';
import LoginButton from './layouts/LoginButton';
import LogoutButton from './layouts/LogoutButton';

const Voted = (props) => {
  const { user } = useContext(AuthContext);

  let content = (
    <div className="flex flex-col items-center text-blueGray-800 p-8">
      <h1 className="my-6 font-bold xl:text-4xl lg:text-3xl md:text-2xl text-center">
        Terima kasih telah memilih 🤩
      </h1>
      <img src={thanks} alt="Thanks" className="p-6 mb-6 lg:w-1/2" />
      <LogoutButton />
    </div>
  );

  if (!user) {
    content = (
      <div className="flex flex-col text-blueGray-800 items-center p-8">
        <h1 className="mb-12 font-bold text-xl sm:text-2xl lg:text-4xl text-center">
          Silahkan login terlebih dahulu
        </h1>
        <LoginButton />
      </div>
    );
  }

  return content;
};

export default Voted;

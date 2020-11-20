import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import thanks from '../assets/images/thanks.svg';
import LoginButton from './layouts/LoginButton';
import LogoutButton from './layouts/LogoutButton';

const Voted = (props) => {
  console.log(props);
  const { id } = useContext(AuthContext);

  let content = (
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-12 font-bold text-4xl text-center">
        Terima kasih telah memilih 🤩
      </h1>
      <img src={thanks} alt="Thanks" className="p-5 mb-6 w-1/2 xl:max-w-3xl" />
      <LogoutButton />
    </div>
  );

  if (!id) {
    content = (
      <div className="flex flex-col items-center p-8">
        <h1 className="mb-12 font-bold text-4xl text-center">
          Silahkan login terlebih dahulu
        </h1>
        <LoginButton />
      </div>
    );
  }

  return content;
};

export default Voted;

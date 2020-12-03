import { useState, useEffect, useContext } from 'react';
import LoadingBar from 'react-top-loading-bar';
import axios from '../axios';
import { AuthContext } from '../contexts/AuthContext';

import Loader from './layouts/Loader';
import LogoutButton from './layouts/LogoutButton';

const Result = () => {
  const { user } = useContext(AuthContext);
  const [finalResult, setFinalResult] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(60);
    axios
      .get('/result')
      .then((response) => {
        const reduced = response.data.reduce((acc, curr) => {
          if (!acc[curr.candidateNumber]) {
            acc[curr.candidateNumber] = 0;
          }

          acc[curr.candidateNumber] += 1;
          return acc;
        }, {});

        const result = {};
        Object.keys(reduced)
          .sort()
          .forEach(function (key) {
            result[key] = reduced[key];
          });

        setFinalResult(result);
        setProgress(100);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const resultComponent = Object.keys(finalResult).map((key) => (
    <div
      className="mx-0 sm:mx-4 p-5 rounded overflow-hidden shadow-lg border-t-8 border-blueGray-800"
      key={key}
    >
      <h1 className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">
        Nomor {key}
      </h1>
      <h2 className="px-6 text-center font-bold text-lg md:text-xl lg:text-2xl">
        {finalResult[key]}
      </h2>
    </div>
  ));

  return (
    <div className="flex flex-col items-center text-blueGray-800 py-4 px-8 sm:py-8">
      <LoadingBar color="#1E293B" progress={progress} />
      <h1 className="my-6 px-4 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        Hasil voting
      </h1>
      {progress < 100 ? (
        <Loader />
      ) : (
        <div className="mt-4 mb-10 sm:mt-10 sm:mb-20 flex flex-wrap justify-center gap-8 sm:flex-row text-blueGray-800">
          {resultComponent}
        </div>
      )}
      {user && <LogoutButton />}
    </div>
  );
};

export default Result;

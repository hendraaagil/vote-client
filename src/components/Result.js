import { useState, useEffect } from 'react';
import axios from '../axios';

import Loader from './layouts/Loader';
import LogoutButton from './layouts/LogoutButton';

const Result = () => {
  const [finalResult, setFinalResult] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    axios
      .get('/result')
      .then((response) => {
        console.log(response.data);

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

        console.log(result);
        setFinalResult(result);
        setIsLoad(false);
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
      <h1 className="my-6 px-4 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        Hasil voting
      </h1>
      {isLoad ? (
        <Loader />
      ) : (
        <div className="mt-4 mb-10 sm:mt-10 sm:mb-20 flex flex-wrap justify-center gap-8 sm:flex-row text-blueGray-800">
          {resultComponent}
        </div>
      )}
      <LogoutButton />
    </div>
  );
};

export default Result;

import { useState, useEffect, useContext } from 'react';
import LoadingBar from 'react-top-loading-bar';
import axios from '../axios';
import { AuthContext } from '../contexts/AuthContext';

import Loader from './layouts/Loader';
import LogoutButton from './layouts/LogoutButton';

const Result = () => {
  const { user } = useContext(AuthContext);
  const [candidates, setCandidates] = useState([]);
  const [finalResult, setFinalResult] = useState({});
  const [progress, setProgress] = useState(0);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setProgress(60);
    setIsLoad(true);
    axios
      .get('/candidates')
      .then((response) => {
        setCandidates(response.data);
        setProgress(85);
      })
      .catch((error) => console.log(error));
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
        setIsLoad(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col items-center text-blueGray-800 py-4 px-8 sm:py-8">
      <LoadingBar color="#1E293B" progress={progress} />
      <h1 className="my-6 px-4 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        Hasil voting
      </h1>

      {isLoad ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:mt-6 mb-8 sm:mb-12 gap-8 sm:gap-4 sm:flex-row text-blueGray-800">
          {candidates?.map((candidate) => {
            return (
              <div
                className="mx-0 sm:mx-4 pb-5 flex flex-col items-center rounded overflow-hidden shadow-lg"
                key={candidate._id}
              >
                <img
                  className="w-full"
                  src={candidate.photoLink}
                  alt="Candidate"
                />
                <h1 className="mt-4 text-4xl font-bold text-center">
                  {candidate.number}
                </h1>
                <h2 className="px-6 py-4 text-center font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {candidate.leader}
                </h2>
                <h2 className="px-6 py-2 text-center font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
                  {candidate.coLeader}
                </h2>
                <div className="p-4 w-1/2 flex flex-col items-center shadow-inner rounded border-t-8 border-blueGray-800">
                  <h2 className="mb-4 text-lg md:text-xl lg:text-2xl font-semibold text-center">
                    Jumlah Suara
                  </h2>
                  <h3 className="text-center font-medium text-lg md:text-xl lg:text-2xl">
                    {finalResult[candidate.number]}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {user && <LogoutButton />}
    </div>
  );
};

export default Result;

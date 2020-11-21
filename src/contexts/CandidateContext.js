import { useState, useEffect, createContext } from 'react';

export const CandidateContext = createContext();

const CandidateContextProvider = ({ children }) => {
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    setCandidate(JSON.parse(localStorage.getItem('candidate')));
  }, []);

  useEffect(() => {
    localStorage.setItem('candidate', JSON.stringify(candidate));
  }, [candidate]);

  const getCandidate = (data) => {
    setCandidate(data);
  };

  const clearCandidate = () => {
    localStorage.removeItem('candidate');
  };

  return (
    <CandidateContext.Provider
      value={{ getCandidate, candidate, clearCandidate }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;

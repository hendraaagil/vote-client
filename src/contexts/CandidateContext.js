import { useState, createContext } from 'react';

export const CandidateContext = createContext();

const CandidateContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = (candidates) => {
    setCandidates(candidates);
  };

  return (
    <CandidateContext.Provider value={{ getCandidates, candidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;

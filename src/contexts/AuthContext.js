import { useState, createContext } from 'react';

export const AuthContext = createContext({
  id: '',
  login: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState('');

  const loginHandler = (reqId) => {
    setId(reqId);
  };

  return (
    <AuthContext.Provider value={{ login: loginHandler, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

import { useState, createContext } from 'react';

export const AuthContext = createContext({
  user: {},
  login: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

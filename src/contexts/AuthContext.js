import { useState, createContext } from 'react';

export const AuthContext = createContext({
  id: '',
  user: {},
});

const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [user, setUser] = useState({});

  const getId = (id) => {
    setId(id);
  };

  const getUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ getId, id, getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

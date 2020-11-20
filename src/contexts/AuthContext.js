import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem('id')));
  }, []);

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(id));
  }, [id]);

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

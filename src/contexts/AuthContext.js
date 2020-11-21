import { useState, useEffect, createContext } from 'react';
import axios from '../axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const getUser = (id) => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  const clearUser = () => {
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ getUser, user, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

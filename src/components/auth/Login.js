import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import Welcome from '../layouts/Welcome';

const Login = (props) => {
  const { getUser } = useContext(AuthContext);
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: {
      username: '',
      password: '',
    },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/login', { username: state.username, password: state.password })
      .then((response) => {
        if (response.data.user) {
          props.history.push('/vote');
          getUser(response.data.user);
        }
      })
      .catch((error) => {
        setState({
          ...state,
          errors: error.response.data.errors,
        });
      });
  };

  return (
    <div className="py-4 px-2 sm:p-16 p-16 flex flex-col items-center sm:flex-row text-blueGray-800">
      <Welcome />
      <div className="auth-container">
        <h2 className="text-title">Silahkan login terlebih dahulu</h2>
        <form className="form">
          <div className="mb-4 flex flex-col items-center">
            <input
              className="input"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={state.username}
            />
            {state.errors.username.length > 0 && (
              <span className="text-error">{state.errors.username}</span>
            )}
          </div>
          <div className="mb-6 flex flex-col items-center">
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
            />
            {state.errors.password.length > 0 && (
              <span className="text-error">{state.errors.password}</span>
            )}
          </div>
          <button className="btn-dark" onClick={handleSubmit}>
            Login
          </button>
          <p className="text-auth">
            Belum punya akun?{' '}
            <Link to="/signup" className="btn-dark-sm">
              Daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

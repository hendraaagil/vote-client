import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import axios from '../../axios';
import { AuthContext } from '../../contexts/AuthContext';

import Welcome from '../layouts/Welcome';

const Login = (props) => {
  const { getUser } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    isDisabled: false,
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
    setProgress(70);
    setState({ ...state, isDisabled: true });
    axios
      .post('/login', { username: state.username, password: state.password })
      .then((response) => {
        if (response.data.user) {
          setState({ ...state, isDisabled: false });
          getUser(response.data.user);
          props.history.push('/vote');
        }
        setProgress(100);
      })
      .catch((error) => {
        setProgress(100);
        setState({
          ...state,
          errors: error.response.data.errors,
        });
      });
  };

  return (
    <div className="py-4 px-2 sm:p-16 p-16 flex flex-col items-center sm:flex-row text-blueGray-800">
      <LoadingBar color="#1E293B" progress={progress} />
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
          <button
            className="btn-dark"
            onClick={handleSubmit}
            disabled={state.isDisabled}
          >
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

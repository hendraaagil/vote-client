import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import axios from '../../axios';

import Welcome from '../layouts/Welcome';

const Signup = (props) => {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    isDisabled: false,
    fullName: '',
    username: '',
    password: '',
    errors: {
      fullName: '',
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
      .post('/signup', {
        fullName: state.fullName,
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        if (response.data.user) {
          setState({ ...state, isDisabled: false });
          props.history.push('/login');
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
    <div className="py-4 px-2 sm:p-16 flex flex-col items-center sm:flex-row text-blueGray-800">
      <LoadingBar color="#1E293B" progress={progress} />
      <Welcome />
      <div className="auth-container">
        <h2 className="text-title">Silahkan daftar terlebih dahulu</h2>
        <form className="form">
          <div className="mb-4 flex flex-col items-center">
            <input
              className="input"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nama Lengkap"
              onChange={handleChange}
              value={state.fullName}
            />
            {state.errors.fullName.length > 0 && (
              <span className="text-error">{state.errors.fullName}</span>
            )}
          </div>
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
            Daftar
          </button>
          <p className="text-auth">
            Sudah punya akun?{' '}
            <Link to="/login" className="btn-dark-sm">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

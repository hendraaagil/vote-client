import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';

import Welcome from '../layouts/Welcome';

const Signup = (props) => {
  const [state, setState] = useState({
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
    axios
      .post('/signup', {
        fullName: state.fullName,
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        if (response.data.user) {
          props.history.push('/login');
        }
      })
      .catch((error) => {
        console.log(error.response);
        setState({
          ...state,
          errors: error.response.data.errors,
        });
      });
  };

  return (
    <div className="p-16 flex text-blueGray-800">
      <Welcome />
      <div className="flex flex-col justify-center items-center w-1/2">
        <h2 className="mb-5 font-semibold text-2xl text-center">
          Silahkan daftar terlebih dahulu
        </h2>
        <form className="flex flex-col">
          <div className="mb-4 flex flex-col items-center">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-blueGray-800 leading-tight focus:outline-none focus:ring"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nama Lengkap"
              onChange={handleChange}
              value={state.fullName}
            />
            {state.errors.fullName.length > 0 && (
              <span className="mt-2 text-red-600 text-sm font-semibold text-center">
                {state.errors.fullName}
              </span>
            )}
          </div>
          <div className="mb-4 flex flex-col items-center">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-blueGray-800 leading-tight focus:outline-none focus:ring"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={state.username}
            />
            {state.errors.username.length > 0 && (
              <span className="mt-2 text-red-600 text-sm font-semibold text-center">
                {state.errors.username}
              </span>
            )}
          </div>
          <div className="mb-6 flex flex-col items-center">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-blueGray-800 leading-tight focus:outline-none focus:ring"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
            />
            {state.errors.password.length > 0 && (
              <span className="mt-2 text-red-600 text-sm font-semibold text-center">
                {state.errors.password}
              </span>
            )}
          </div>
          <button className="btn-dark" onClick={handleSubmit}>
            Daftar
          </button>
          <p className="mt-4 font-semibold text-center">
            Sudah punya akun?{' '}
            <Link
              to="/login"
              className="px-2 py-1 rounded-lg bg-blueGray-800 text-blueGray-300 border-blueGray-800 border-2 transition hover:bg-blueGray-300 hover:text-blueGray-800"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

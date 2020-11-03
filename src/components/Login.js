import { Helmet, HelmetProvider } from 'react-helmet-async';

import Welcome from './layout/Welcome';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login to E-Voting</title>
      </Helmet>
      <div className="p-20 flex text-gray-900">
        <Welcome />
        <div className="flex flex-col justify-center items-center w-1/2">
          <h2 className="mb-5 font-semibold text-2xl text-center">
            Silahkan login terlebih dahulu
          </h2>
          <form className="flex flex-col">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn-dark py-2 hover:bg-transparent hover:text-gray-900">
              Login
            </button>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;

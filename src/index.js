import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import CandidateContextProvider from './contexts/CandidateContext';
import './styles.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const app = (
  <BrowserRouter>
    <AuthContextProvider>
      <CandidateContextProvider>
        <App />
      </CandidateContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

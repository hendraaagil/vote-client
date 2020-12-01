import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../components/Landing';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';
import Home from '../components/candidates/Home';
import DetailCandidate from '../components/candidates/DetailCandidate';
import Voted from '../components/Voted';
import Result from '../components/Result';
import Footer from '../components/layouts/Footer';
import NotFound from '../components/layouts/NotFound';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/vote/:candidateId" component={DetailCandidate} />
        <Route path="/vote" component={Home} />
        <Route path="/voted" component={Voted} />
        <Route path="/result" component={Result} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

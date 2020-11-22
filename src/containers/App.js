import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../components/Landing';
import Login from '../components/auth/Login';
import Home from '../components/candidates/Home';
import DetailCandidate from '../components/candidates/DetailCandidate';
import Voted from '../components/Voted';
import Footer from '../components/layouts/Footer';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/voted" component={Voted} />
        <Route path="/vote/:candidateId" component={DetailCandidate} />
        <Route path="/vote" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

import { Route, Switch } from 'react-router-dom';

import Landing from '../components/Landing';
import Login from '../components/auth/Login';
import Home from '../components/candidates/Home';
import DetailCandidate from '../components/candidates/DetailCandidate';
import Voted from '../components/Voted';

const App = () => {
  return (
    <Switch>
      <Route path="/voted" component={Voted} />
      <Route path="/vote/:candidateId" component={DetailCandidate} />
      <Route path="/vote" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Landing} />
    </Switch>
  );
};

export default App;

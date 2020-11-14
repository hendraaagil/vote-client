import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from '../axios';

import Landing from '../components/Landing';
import Login from './Login';
import Home from '../components/Home';
import DetailCandidate from '../components/DetailCandidate';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get('/candidates')
      .then((res) => setCandidates(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Switch>
      <Route path="/vote/:candidateId" component={DetailCandidate} />
      <Route path="/vote" children={<Home candidates={candidates} />} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;

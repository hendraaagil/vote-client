import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Home from './components/Home';
import DetailCandidate from './components/DetailCandidate';

function App() {
  const [state, setState] = useState({
    candidates: [
      {
        id: 1,
        ketua: 'Upin',
        wakil: 'Ipin',
        program: 'Mencerdaskan anak bangsa',
        visi: 'Bisa',
        misi: 'Hebat',
      },
      {
        id: 2,
        ketua: 'Ehsan',
        wakil: 'Fizi',
        program: 'Mencerdaskan anak bangsa',
        visi: 'Bisa',
        misi: 'Hebat',
      },
      {
        id: 3,
        ketua: 'Jarjit',
        wakil: 'Mail',
        program: 'Mencerdaskan anak bangsa',
        visi: 'Bisa',
        misi: 'Hebat',
      },
    ],
  });

  return (
    <Switch>
      <Route path="/vote/:candidateId" component={DetailCandidate} />
      <Route path="/vote" children={<Home candidates={state.candidates} />} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;

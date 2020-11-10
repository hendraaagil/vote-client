import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';

import Landing from './components/Landing';
import Login from './components/Login';
import Home from './components/Home';
import DetailCandidate from './components/DetailCandidate';

function App() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      ketua: 'Upin',
      wakil: 'Ipin',
      program: 'Mencerdaskan anak bangsa',
      visi: ['Bisa', 'Pasti Bisa'],
      misi: ['Hebat', 'Menjadikan sekolah tempat bermain'],
    },
    {
      id: 2,
      ketua: 'Ehsan',
      wakil: 'Fizi',
      program: 'Mencerdaskan anak bangsa',
      visi: ['Bisa', 'Pasti Bisa'],
      misi: ['Hebat', 'Menjadikan sekolah tempat belajar'],
    },
    {
      id: 3,
      ketua: 'Jarjit',
      wakil: 'Mail',
      program: 'Mencerdaskan anak bangsa',
      visi: ['Bisa', 'Pasti Bisa'],
      misi: ['Hebat', 'Menjadikan sekolah tempat tidur'],
    },
  ]);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = () => {
  //     axios
  //       .get('http://localhost:8000/')
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   getData();
  // }, []);

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

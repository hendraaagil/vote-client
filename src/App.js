import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

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
    ],
    data: {
      author: '',
      text: '',
    },
  });

  const getData = () => {
    axios.get('http://localhost:8000/', { crossdomain: true }).then((res) => {
      console.log(res.data);
      setState({
        ...state,
        data: {
          author: res.data.author,
          text: res.data.text,
        },
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Switch>
      <Route path="/vote/:candidateId" component={DetailCandidate} />
      <Route path="/vote" children={<Home candidates={state.candidates} />} />
      <Route path="/login" component={Login} />
      {/* <Route path="/" component={Landing} /> */}
      <Route path="/" children={<Landing data={state.data} />} />
    </Switch>
  );
}

export default App;

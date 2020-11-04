import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route path="/vote" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;

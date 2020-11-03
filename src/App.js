import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;

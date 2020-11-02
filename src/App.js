import { Route } from 'react-router-dom';

import Landing from './components/Landing';

function App() {
  return <Route path="/" component={Landing} />;
}

export default App;

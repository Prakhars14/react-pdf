import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Report from './Report';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/report" exact component={Report} />
          </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;

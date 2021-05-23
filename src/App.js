import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Funds from './pages/Funds'
import Activity from './pages/Activity'
import About from './pages/About'
import Support from './pages/Support'
import Profile from './pages/Profile'
import './assets/main.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/funds"><Funds /></Route>
          <Route exact path="/activity"><Activity /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/support"><Support /></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route exact path="/*">Error page</Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;

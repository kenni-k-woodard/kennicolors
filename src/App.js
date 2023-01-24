import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import Display from './components/Display/Display.js';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/69/54/125" />
        </Route>
        <Route path="/:r/:g/:b" component={Main} />
      </Switch>
    </div>
  );
}

export default App;

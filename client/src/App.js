import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Play from './components/Play';

import PlayState from './context/play/PlayState';

import './styles.css';
import Leaderboard from './components/Leaderboard';

const App = () => {
  return (
    <PlayState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/play' component={Play} />
          <Route exact path='/leaderboard' component={Leaderboard} />
        </Switch>
      </Router>
    </PlayState>
  );
};

export default App;

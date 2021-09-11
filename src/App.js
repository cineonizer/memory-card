import React from 'react';
import Nav from './components/Nav';
import Scoreboard from './components/Scoreboard';
import Main from './components/Main';
import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Scoreboard />
      <Main />
    </div>
  );
};

export default App;

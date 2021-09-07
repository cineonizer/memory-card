import React from 'react';
import Nav from './components/Nav';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Scoreboard />
      <Card />
    </div>
  );
};

export default App;

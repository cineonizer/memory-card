import React, { useState } from 'react';
import Nav from './components/Nav';
import Scoreboard from './components/Scoreboard';
import Main from './components/Main';
import './css/App.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  const incrementCurrentScore = () => {
    console.log('add')
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className="App">
      <Nav />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Main incrementCurrentScore={incrementCurrentScore}/>
    </div>
  );
};

export default App;

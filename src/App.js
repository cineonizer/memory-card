import React, { useState } from 'react';
import Nav from './components/Nav';
import Scoreboard from './components/Scoreboard';
import Main from './components/Main';
import './css/App.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementCurrentScore = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0)
  };

  const updateBestScore = () => {
    setBestScore(currentScore);
  };

  return (
    <div className="App">
      <Nav />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Main
        currentScore={currentScore}
        incrementCurrentScore={incrementCurrentScore}
        resetCurrentScore={resetCurrentScore}
        updateBestScore={updateBestScore}
      />
    </div>
  );
};

export default App;

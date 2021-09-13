import React from 'react';
import '../css/Scoreboard.css';

const Scoreboard = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="current-score">CURRENT SCORE: {currentScore}</div>
        <div className="best-score">BEST SCORE: {bestScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;

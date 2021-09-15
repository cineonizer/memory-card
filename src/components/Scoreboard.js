import React from 'react';
import '../css/Scoreboard.css';

const Scoreboard = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="current-score">
          <span>CURRENT SCORE:</span>
          <span>{currentScore}</span>
        </div>
        <div className="best-score">
          <span>BEST SCORE:</span>
          <span>{bestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;

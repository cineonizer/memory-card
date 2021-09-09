import React from 'react';
import '../css/Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="current-score">CURRENT SCORE: {0}</div>
        <div className="best-score">BEST SCORE: {0}</div>
      </div>
    </div>
  );
};

export default Scoreboard;

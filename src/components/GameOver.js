import React from 'react';
import '../css/GameOver.css';

const GameOver = () => {
  return (
    <div className="gameover">
      <span className="game-over-text">GAME OVER</span>
      <button className="new-game-button">NEW GAME</button>
    </div>
  );
};

export default GameOver;

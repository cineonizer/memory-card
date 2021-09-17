import React from 'react';
import '../css/GameOver.css';

const GameOver = (props) => {
  const { handleNewGameClickEvent } = props;

  return (
    <div className="gameover">
      <span className="game-over-text">GAME OVER</span>
      <button className="new-game-button" onClick={handleNewGameClickEvent} >NEW GAME</button>
    </div>
  );
};

export default GameOver;

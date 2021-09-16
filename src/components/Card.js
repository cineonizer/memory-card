import React from 'react';
import '../css/Card.css'

const Card = (props) => {
  const { card, incrementCurrentScore, setGameOver } = props;

  const handleClick = () => {
    // if the card is clicked again then set the game to be over
    if (card.isClicked) {
      setGameOver(true)
    } else {
      incrementCurrentScore()
      card.isClicked = true;
    }
  }

  return (
    <div className="card">
      <img className="image" src={card.url} alt={card.name} draggable="false" onClick={handleClick}/>
      <span className="name">{card.name.toUpperCase()}</span>
    </div>
  )
};

export default Card;

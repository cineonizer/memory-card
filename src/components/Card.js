import React from 'react';
import '../css/Card.css'

const Card = (props) => {
  const { card, incrementCurrentScore } = props;

  const handleClick = () => {
    if (card.isClicked) {
      console.log('GAME OVER: this was already clicked!')
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

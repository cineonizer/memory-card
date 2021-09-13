import React from 'react';
import '../css/Card.css'

const Card = (props) => {
  const { url, name, incrementCurrentScore } = props;

  return (
    <div className="card">
      <img className="image" src={url} alt={name} draggable="false" onClick={incrementCurrentScore}/>
      <span className="name">{name.toUpperCase()}</span>
    </div>
  )
};

export default Card;

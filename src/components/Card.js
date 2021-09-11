import React from 'react';
import '../css/Card.css'

const Card = (props) => {
  const { url, name } = props;

  return (
    <div className="card">
      <img className="image" src={url} alt={name} draggable="false"/>
      <span className="name">{name.toUpperCase()}</span>
    </div>
  )
};

export default Card;

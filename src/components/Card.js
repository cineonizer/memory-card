import React from 'react';
import '../css/Card.css';

const Card = (props) => {
  const { url, description } = props;

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={url} alt={description} />
      </div>
    </div>
  );
};

export default Card;

import React from 'react';

const Card = (props) => {
  const { url, description } = props;

  return <img src={url} alt={description} />;
};

export default Card;

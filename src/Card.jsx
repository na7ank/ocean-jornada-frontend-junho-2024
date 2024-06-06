// Card.js
import React from 'react';

function Card({ title, imageUrl }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Card;

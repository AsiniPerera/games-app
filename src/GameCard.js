import React from 'react';
import './App.css';

const GameCard = ({ image, title, description, implemented, link }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="game-card" style={cardStyle}>
      <div>
        <h3 className="game-title">{title}</h3>
        <p className="game-description">{description}</p>
        {implemented ? (
          <a href={link} className="play-button">Play Now</a>
        ) : (
          <span className="coming-soon">Coming Soon</span>
        )}
      </div>
    </div>
  );
};

export default GameCard;

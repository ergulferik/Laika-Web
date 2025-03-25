import React from 'react';
import Games from './Games';

const GamesPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Oyun Koleksiyonumuz</h1>
        <p>100'den fazla masa oyunu ile eğlenceli vakit geçirin</p>
      </div>
      <Games />
    </div>
  );
};

export default GamesPage; 
import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES_DATA } from '../data/Game.data';
import { Game } from '../models/game.model';



const games: Game[] = GAMES_DATA;

const Games: React.FC = () => {
  return (
    <section id="oyunlar" className="games-section">
      <h2>Oyun Koleksiyonumuz</h2>
      <div className="games-grid">
        {games.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id} className="game-card">
            <div className="game-image">
              <img src={game.image} alt={game.name} />
            </div>
            <div className="game-info">
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <div className="game-details">
                <span>Oyuncu: {game.players}</span>
                <span>Süre: {game.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Games; 
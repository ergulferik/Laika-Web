import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GAMES_DATA } from '../data/Game.data';
import '../styles/GameDetail.css';
import { Game } from '../models/game.model';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const foundGame = GAMES_DATA.find(game => game.id === id);
        if (foundGame) {
          console.log(foundGame);
          setGame(foundGame);
        }
      } catch (error) {
        console.error('Oyun detayları yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Yükleniyor...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="page-container">
        <div className="error">Oyun bulunamadı</div>
      </div>
    );
  }

  return (
    <div className="game-detail">
      <div className="game-detail-header">
        <div className="game-detail-image">
          <img src={game.image} alt={game.name} />
        </div>
        <div className="game-detail-info">
          <h1>{game.name}</h1>
          <div className="game-categories">
            {game.category.map((cat, index) => (
              <span key={index} className="game-category-tag">{cat}</span>
            ))}
          </div>
          <div className="game-meta">
            <p className="game-players">Oyuncu Sayısı: {game.players}</p>
            <p className="game-duration">Oyun Süresi: {game.duration}</p>
          </div>
        </div>
      </div>

      <div className="game-detail-content">
        <section className="game-description">
          <h2>Oyun Hakkında</h2>
          <p>{game.description}</p>
        </section>

        <section className="game-features">
          <h2>Özellikler</h2>
          <ul>
            {game.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="game-rules">
          <h2>Oyun Kuralları</h2>
          <ul>
            {game.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GameDetail; 
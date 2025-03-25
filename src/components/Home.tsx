import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <video src="assets/coffe-background.mp4" autoPlay muted loop playsInline />
      <h1>Laika Kafe</h1>
      <p>Masa oyunları ve özel kahve deneyimi</p>
      <div className="hero-buttons">
        <Link to="/games" className="btn btn-primary">Oyunları Keşfet</Link>
        <Link to="/menu" className="btn btn-secondary">Menüyü Gör</Link>
      </div>
    </section>
  );
};

export default Home; 
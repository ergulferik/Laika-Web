import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import './styles/Navbar.css'
import Home from './components/Home'
import Games from './components/Games'
import Menu from './components/Menu'
import About from './components/About'
import GameDetail from './components/GameDetail'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">
            <img src="assets/laikaLogo.png" alt="Laika Logo" className="nav-logo" />
            Laika
          </Link>
        </div>
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Ana Sayfa</Link></li>
          <li><Link to="/games" className={location.pathname.startsWith('/games') ? 'active' : ''} onClick={closeMenu}>Oyunlar</Link></li>
          <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={closeMenu}>Menü</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>Hakkımızda</Link></li>
        </ul>
      </nav>
      {isMenuOpen && <div className="menu-overlay active" onClick={closeMenu}></div>}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

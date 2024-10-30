
// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.css';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/"><img src="/assets/images/logo.png" alt="Logo" /></Link>
      </div>
      <nav>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/investigacion">Investigación</Link></li>
          <li><Link to="/contactos">Contactos</Link></li>
        </ul>
        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import Investigacion from './pages/Investigacion';
import Contactos from './pages/Contactos';
// src/App.js
import './styles/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
  );
}

export default App;

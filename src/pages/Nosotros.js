// src/pages/Nosotros.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Nosotros() {
  return (
    <>
      <Header />
      <main>
        <section id="equipo" className="section">
          <h2>Nuestros Colaboradores</h2>
          <div className="equipo-card-container">
            <div className="equipo-card">
              <img src="/assets/images/nosotros/jinlago.png" alt="Colaborador 1" />
              <h3>Jorge Inlago Fonseca</h3>
              <p>Ingeniero Mecatrónico.</p>
            </div>
            {/* Añade más colaboradores según sea necesario */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Nosotros;

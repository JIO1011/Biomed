// src/pages/Proyectos.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Proyectos() {
  return (
    <>
      <Header />
      <main>
        <section id="proyectos" className="section">
          <h2>Proyectos Biomédicos</h2>
          <div className="category-container">
            <div className="category" style={{ backgroundImage: "url('/assets/images/proyectos/bioinstrumentacion.jpg')" }}>
              <h3>Bioinstrumentación</h3>
              <p>Proyectos que exploran el uso de la tecnología en la medicina y salud.</p>
            </div>
            {/* Añade más categorías de proyectos */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Proyectos;

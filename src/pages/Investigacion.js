// src/pages/Investigacion.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Investigacion() {
  return (
    <>
      <Header />
      <main>
        <section id="investigacion" className="section">
          <h2>Temas de Investigación</h2>
          <div className="category-container">
            <div className="category" style={{ backgroundImage: "url('/assets/images/Investigacion/imagenes.png')" }}>
              <h3>CLASIFICACIÓN DE IMÁGENES</h3>
              <p>Proyectos que exploran el uso de la tecnología en la medicina y salud.</p>
            </div>
            {/* Añade más categorías de investigación */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Investigacion;

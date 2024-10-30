// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero" style={{ background: "url('../assets/images/back_hero.jpg') no-repeat center center/cover" }}>
          <div className="hero-content">
            <h1>BIOMEDIC</h1>
            <p>Creando soluciones de ingeniería en la medicina modernas y funcionales para todos.</p>
            <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
          </div>
        </section>
        {/* Puedes añadir más contenido aquí si es necesario */}
      </main>
      <Footer />
    </>
  );
}

export default Home;

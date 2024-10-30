// src/pages/Contactos.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Contactos() {
  return (
    <>
      <Header />
      <main>
        <section className="section section-fluid">
          <div className="google-map-container">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9784.79169817868!2d-78.48704720003892!3d-0.21036157102928357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a1194846a7d%3A0xdf81062111f6f31d!2sUNIVERSIDAD%20POLIT%C3%89CNICA%20SALESIANA!5e0!3m2!1ses-419!2sec!4v1714597157404!5m2!1ses-419!2sec"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contactos;

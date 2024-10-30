// src/components/Footer.js
import React from 'react';
import '../styles/styles.css';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="#"><img src="../assets/images/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="./assets/images/youtube.png" alt="Youtube" /></a>
        <a href="#"><img src="./assets/images/instagram.png" alt="Instagram" /></a>
      </div>
      <p>&copy; JIO 2024. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

//prueba\biomedic-react\src\assets\images\facebook.png
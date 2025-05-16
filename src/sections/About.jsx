import React from 'react';
import '../styles/About.css';

// Importar íconos de react-icons
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  // URL de la imagen (reemplazar con la ruta correcta de tu imagen)
  const aboutImage = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Imagen */}
        <div className="about-image-container">
          <img 
            src={aboutImage} 
            alt="Abogada" 
            className="about-image"
          />
        </div>
        
        {/* Texto y botones */}
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Mí</h2>
            <p>
              Soy una abogada especializada en derecho de familia y sucesiones, con más de 10 años de experiencia 
              asesorando a familias en situaciones complejas. Mi enfoque se centra en ofrecer soluciones 
              personalizadas y compasivas, priorizando siempre el bienestar de las personas involucradas.
            </p>
            <p>
              Me apasiona ayudar a mis clientes a encontrar la mejor solución a sus problemas legales, 
              ofreciendo un trato cercano y profesional en cada caso.
            </p>
          </div>
          
          {/* Botones de redes sociales */}
          <div className="social-links">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://wa.me/TUNUMERO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

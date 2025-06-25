import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/profile_abogada.jpg';

// Importar íconos de react-icons
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img 
              src={aboutImage} 
              alt="Abogada" 
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy Abogada de la Universidad de Concepción, especializada en derecho civil y sucesorio con más de 30 años de experiencia 
                asesorando a clientes de la Quinta Región interior. Desde 2006 realizando suplencias en la Notaría La Calera, y desde
                2016 en el Juzgado de Policía Local de Hijuelas, además de asumir la subrogación en el Juzgado de Letras de La Calera,
                como parte de la terna de abogados.
              </p>
              <p>
                Mi experiencia en la mediación de herencias y particiones me permite resolver conflictos hereditarios de manera pacífica y efectiva. 
                Mi enfoque ayuda a las familias a encontrar soluciones consensuadas, evitando largos y costosos procesos judiciales.
              </p>
              <p>Mi enfoque se centra en ofrecer soluciones personalizadas y de excelencia, 
                priorizando siempre el bienestar de las personas involucradas. Me apasiona ayudar a mis clientes a encontrar la mejor solución a sus problemas legales, 
                ofreciendo un trato cercano y profesional en cada caso. 
              </p>
            </div>
            
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/giselle-tapia-romo-8598a1366" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://wa.me/56995990336" 
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
      </div>
    </section>
  );
};

export default About;

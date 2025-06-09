import React, { useState, useEffect } from 'react';
import '../styles/Services.css';

// Importar imágenes (asegúrate de tener estas imágenes en tu carpeta de assets)
import mediacionImg from '../assets/mediacion.jpg';
import terrenosImg from '../assets/terrenos.jpg';
import legalesImg from '../assets/legales.jpg';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      title: 'Mediación en Herencias',
      description: 'Ofrecemos servicios profesionales de mediación para resolver conflictos hereditarios de manera pacífica y efectiva. Nuestro enfoque ayuda a las familias a encontrar soluciones consensuadas, evitando largos y costosos procesos judiciales.',
      image: mediacionImg
    },
    {
      id: 2,
      title: 'Venta de Terrenos',
      description: 'Asesoramiento legal especializado en la compraventa de terrenos. Nos encargamos de todo el proceso legal, asegurando que la transacción sea segura y cumpla con todas las normativas vigentes.',
      image: terrenosImg
    },
    {
      id: 3,
      title: 'Otros Servicios Legales',
      description: 'Amplia gama de servicios legales personalizados para cubrir todas sus necesidades. Desde asesoramiento jurídico hasta representación legal, estamos aquí para ayudarte con profesionalismo y dedicación.',
      image: legalesImg
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-avanzar el carrusel cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        
        <div className="carousel-container">
          <div 
            className="carousel" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div 
                  className="service-image" 
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide} aria-label="Anterior">
              &lt;
            </button>
            <button className="carousel-btn" onClick={nextSlide} aria-label="Siguiente">
              &gt;
            </button>
          </div>
          
          <div className="carousel-dots">
            {services.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al servicio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

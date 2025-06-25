import React, { useState, useEffect } from 'react';
import '../styles/Services.css';

import escriturasImg from '../assets/legales.jpg';
import arbitralesImg from '../assets/mediacion.jpg';
import gestionesImg from '../assets/terrenos.jpg';
import civilesImg from '../assets/civiles.jpg';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  
  const services = [
    {
      id: 1,
      title: 'Redacción de Escrituras',
      description: 'Servicio profesional de análisis de títulos de propiedad para la redacción precisa de contratos de compraventa, usufructo, partición, separación de bienes y constitución de sociedades. Aseguramos que todos los documentos cumplan con la normativa vigente, protegiendo sus intereses.',
      image: escriturasImg
    },
    {
      id: 2,
      title: 'Juicios Arbitrales',
      description: 'Asesoramiento especializado en la designación de jueces árbitros para la resolución de conflictos entre comuneros o socios. Gestionamos todo el proceso del juicio arbitral o particional, ofreciendo soluciones efectivas y ágiles para comunidades de herederos y socios.',
      image: arbitralesImg
    },
    {
      id: 3,
      title: 'Gestiones Voluntarias',
      description: 'Tramitación profesional de gestiones no contenciosas ante juzgados, incluyendo posesiones efectivas, autorizaciones para enajenar, peticiones mineras e informaciones para perpetua memoria. Garantizamos un seguimiento personalizado de cada trámite.',
      image: gestionesImg
    },
    {
      id: 4,
      title: 'Juicios Civiles',
      description: 'Representación legal especializada en juicios de deslindes, indemnización de perjuicios e incumplimiento de contrato. Desarrollamos estrategias legales efectivas para proteger sus derechos e intereses en cada caso.',
      image: civilesImg
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

  // Auto-avanzar el carrusel cada 5 segundos, a menos que esté pausado
  useEffect(() => {
    if (isAutoPlayPaused) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide, isAutoPlayPaused]);
  
  const handleInteractionStart = () => {
    setIsAutoPlayPaused(true);
  };
  
  const handleInteractionEnd = () => {
    setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 10000);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        
        <div 
          className="carousel-container"
          onMouseEnter={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseLeave={() => setIsAutoPlayPaused(false)}
        >
          <div 
            className="carousel" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div 
                  className="service-image" 
                  style={{ backgroundImage: `url(${service.image})` }}
                  onMouseEnter={handleInteractionStart}
                ></div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn" 
              onClick={() => {
                prevSlide();
                handleInteractionStart();
              }} 
              aria-label="Anterior"
            >
              &lt;
            </button>
            <button 
              className="carousel-btn" 
              onClick={() => {
                nextSlide();
                handleInteractionStart();
              }} 
              aria-label="Siguiente"
            >
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

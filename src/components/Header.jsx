import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Header.css';

const slides = [
  {
    title: 'Abogada Mediadora',
    subtitle: 'Especialista en herencias y ventas de terrenos',
    buttonText: 'Consulta Gratis',
    bgImage: '/slide1.jpg'  // Puedes usar .jpg aquí
  },
  {
    title: 'Asesoría Legal Personalizada',
    subtitle: 'Soluciones efectivas para tus necesidades legales',
    buttonText: 'Contáctanos',
    bgImage: '/slide2.png'  // Y .png aquí
  },
  {
    title: 'Experiencia y Profesionalismo',
    subtitle: 'Más de 10 años resolviendo casos exitosamente',
    buttonText: 'Conoce Más',
    bgImage: '/slide3.jpg'  // Y .jpg aquí de nuevo
  }
];

const Header = () => {
  return (
    <header className="main-header">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="header-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div 
                className="slide-background"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              <div className="content-wrapper">
                <div className="card">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <button className="cta-button">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Header;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Header.css';

const slides = [
  {
    title: 'Asesoría Legal Personalizada',
    subtitle: 'Expertiz en materias civiles, especialmente herencias y particiones.',
    buttonText: 'Contacte Ahora',
    bgImage: '/slide1.jpg'
  },
  {
    title: 'Experiencia y Profesionalismo',
    subtitle: 'Más de 30 años de experiencia en derecho civil con ética profesional.',
    buttonText: 'Contacte Ahora',
    bgImage: '/slide3.jpg'
  },
  {
    title: 'Atención Presencial y Cercana',
    subtitle: 'Visítenos en el corazón de La Calera.',
    buttonText: 'Contacte Ahora',
    bgImage: '/slide2.png'
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
                  <button className="cta-button" onClick={() => window.open('https://wa.me/56995990336', '_blank')}>
  {slide.buttonText}
</button>
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

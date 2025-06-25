import React, { useState } from 'react';
import { FaBars, FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo_horizontal_b.jpg';
import './Navbar.css';

const PHONE_NUMBER = '+56995990336';
const WHATSAPP_LINK = 'https://wa.me/56995990336';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePhoneClick = () => {
    // Abre automáticamente el marcador en móviles o copia el número en el portapapeles en desktop
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      // En desktop, copia el número al portapapeles
      navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
        // Opcional: Mostrar un mensaje de confirmación
        alert(`Número ${PHONE_NUMBER} copiado al portapapeles`);
      }).catch(err => {
        console.error('Error al copiar el número: ', err);
        // Si falla, abre el dialer de teléfono
        window.location.href = `tel:${PHONE_NUMBER}`;
      });
    }
  };

  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClose = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => document.removeEventListener('mousedown', handleClose);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>
      <div className="navbar-section navbar-center">
        <img src={logo} alt="Logo Abogada" className="navbar-logo" />
      </div>
      <div className="navbar-section navbar-right">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={26} />
        </a>
        <button 
          className="phone-btn" 
          onClick={handlePhoneClick} 
          aria-label={`Llamar al número ${PHONE_NUMBER}`}
          title={`Llamar al ${PHONE_NUMBER}`}
        >
          <FaPhone size={26} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

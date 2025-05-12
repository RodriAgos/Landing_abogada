import React, { useState } from 'react';
import { FaBars, FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';

const PHONE_NUMBER = '+56912345678'; // Cambia por el número real
const WHATSAPP_LINK = 'https://wa.me/56912345678'; // Cambia por el número real

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePhoneClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    }
  };

  // Cerrar menú al hacer click fuera
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
      {/* Menú hamburguesa solo visible en móvil */}
      <div className="navbar-section navbar-left">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>
      {/* Logo siempre centrado */}
      <div className="navbar-section navbar-center">
        <img src={logo} alt="Logo Abogada" className="navbar-logo" />
      </div>
      {/* Iconos de contacto */}
      <div className="navbar-section navbar-right">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={22} />
        </a>
        <button className="phone-btn" onClick={handlePhoneClick} aria-label="Llamar">
          <FaPhone size={22} />
        </button>
      </div>

      {/* Menú hamburguesa overlay en móvil */}
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

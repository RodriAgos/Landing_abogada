import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo_horizontal_t.png";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-section contacto">
        <h4>Contacto</h4>
        <a href="https://maps.google.com/?q=Av. Providencia 123, Santiago" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt /> Av. Providencia 123, Santiago
        </a>
        <a href="tel:+56912345678"><FaPhoneAlt /> +56 9 1234 5678</a>
        <a href="mailto:contacto@abogada.cl"><FaEnvelope /> contacto@abogada.cl</a>
      </div>
      <div className="footer-section horario">
      <h3 className="section-title">Horario</h3>
            <div className="hours-item">
              <span>Lunes-Viernes:</span>
              <span>9:00 - 20:00</span>
            </div>
            <div className="hours-item">
              <span>Sábado:</span>
              <span>10:00 - 18:00</span>
            </div>
            <div className="hours-item">
              <span>Domingo:</span>
              <span>11:00 - 16:00</span>
            </div>
      </div>
      <div className="footer-section logo-wsp">
        <img src={logo} alt="Logo Giselle Tapia Abogado" className="footer-logo" />
        <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="footer-wsp-btn">
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-bottom">
      <span>© 2025 Giselle Tapia Abogado. Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default Footer;

import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo_horizontal_t.png";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-section contacto">
        <h4>Contacto</h4>
        <a href="https://www.google.com/maps/place/Almte.+Latorre+487,+2291538+La+Calera,+Calera,+Valpara%C3%ADso/@-32.7892021,-71.1878413,17z/data=!4m16!1m9!3m8!1s0x968834abf514ebeb:0xfe8613be4faf10db!2sAlmte.+Latorre+487,+2291538+La+Calera,+Calera,+Valpara%C3%ADso!3b1!8m2!3d-32.7889454!4d-71.1877857!10e5!16s%2Fg%2F11y3mv1zh7!3m5!1s0x968834abf514ebeb:0xfe8613be4faf10db!8m2!3d-32.7889454!4d-71.1877857!16s%2Fg%2F11y3mv1zh7?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt /> Almte. Latorre 487, La Calera
        </a>
        <a href="tel:+56912345678"><FaPhoneAlt /> +56 9 95990336</a>
        <a href="mailto:contacto@abogada.cl"><FaEnvelope /> rubetgi@hotmail.com</a>
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

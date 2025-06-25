import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    // Configuración de EmailJS
    const serviceID = 'service_123'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'template_123'; // Reemplaza con tu Template ID de EmailJS
    const publicKey = 'tu_public_key'; // Reemplaza con tu Public Key de EmailJS

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Correo enviado con éxito!', result.text);
        setSubmitStatus({ 
          success: true, 
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' 
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setSubmitStatus({ 
          success: false, 
          message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.1681231929297!2d-71.2112467244316!3d-33.42713317336232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664e7e9e6d5d5d5%3A0x5b5b5b5b5b5b5b5b!2sAlmte.%20Latorre%20487%2C%20La%20Calera%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1623264000000!5m2!1ses!2scl";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contáctenos</h2>
        <div className="contact-content">
          <div className="contact-wrapper">
            <div className="contact-form">
              <h3>Envíenos un mensaje</h3>
              <form ref={form} onSubmit={sendEmail}>
                {submitStatus.message && (
                  <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.success ? (
                      <FaCheckCircle className="icon" />
                    ) : (
                      <FaExclamationCircle className="icon" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}
                <div className="form-group">
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Nombre completo" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Correo electrónico" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="user_phone" 
                    placeholder="Teléfono" 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Su mensaje" 
                    rows="6" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>Nuestra Ubicación</h3>
              <div className="map-container">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Ubicación del Despacho"
                ></iframe>
              </div>
              <div className="contact-details">
                <p><i className="fas fa-map-marker-alt"></i> <strong>Dirección:</strong> Almte. Latorre 487, La Calera, Valparaíso</p>
                <p><i className="fas fa-phone"></i> <strong>Teléfono:</strong> +56 9 9599 0336</p>
                <p><i className="fas fa-envelope"></i> <strong>Email:</strong> giselle.tapia.romo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

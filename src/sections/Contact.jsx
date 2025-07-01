import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar el error del campo cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'El nombre es requerido';
    if (!formData.user_email) {
      newErrors.user_email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'El correo no es válido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const email = 'giselle.tapia.romo@gmail.com';
      const subject = `Consulta de ${formData.user_name}`;
      const body = `Nombre: ${formData.user_name}%0D%0A` +
                  `Email: ${formData.user_email}%0D%0A` +
                  `Teléfono: ${formData.user_phone || 'No proporcionado'}%0D%0A%0D%0A` +
                  `Mensaje:%0D%0A${formData.message}`;
      
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      setSubmitStatus({ 
        success: true, 
        message: 'Redirigiendo a tu cliente de correo...' 
      });
      
      // Resetear el formulario después de un tiempo
      setTimeout(() => {
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: ''
        });
      }, 2000);
    } else {
      setSubmitStatus({ 
        success: false, 
        message: 'Por favor, completa los campos requeridos correctamente.' 
      });
    }
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
              <form onSubmit={handleSubmit}>
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
                    value={formData.user_name}
                    onChange={handleChange}
                    className={errors.user_name ? 'error' : ''}
                    placeholder="Nombre completo" 
                  />
                  {errors.user_name && <span className="error-message">{errors.user_name}</span>}
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="user_email" 
                    value={formData.user_email}
                    onChange={handleChange}
                    className={errors.user_email ? 'error' : ''}
                    placeholder="Correo electrónico" 
                  />
                  {errors.user_email && <span className="error-message">{errors.user_email}</span>}
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="user_phone" 
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="Teléfono (opcional)" 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Su mensaje" 
                    rows="6"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                >
                  Enviar Mensaje
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

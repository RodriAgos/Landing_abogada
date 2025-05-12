import React from 'react';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contacto</h2>
    <form>
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Correo" required />
      <textarea placeholder="Mensaje" required />
      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default Contact;

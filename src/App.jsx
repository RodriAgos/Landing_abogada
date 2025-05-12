import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    <Footer />
    </>
  );
}

export default App;

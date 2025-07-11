import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

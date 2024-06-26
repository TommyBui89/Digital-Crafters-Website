import React from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Services from './components/Services';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <Navbar />
      <Header id="header" />
      <About id="about" />
      <Services id="services" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Testimonial id="testimonial" />
      <Pricing id="pricing" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;

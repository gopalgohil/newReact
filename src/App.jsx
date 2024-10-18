import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import {motion} from 'framer-motion'
// import { fadeIn } from './Components/variants';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

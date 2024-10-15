import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/Project'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
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
  )
}

import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project1 from './Components/Project1';
import Footer from './Components/Footer';
import Service1 from './Components/Service1';
import Contact1 from './Components/Contact1';
import About1 from './Components/About1';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Navbar will be displayed on every page */}
        <Navbar />

        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Project />
                <Services />
                <Skills />
                <Contact />
              
                
              </>
            }
          />
          {/* Login page route */}
         
          <Route path="/login" element={<Login />} />
         
          <Route path='/Project1' element={<Project1 />}/>

          <Route path='/Service1' element={<Service1 />}/>

          <Route path='/Contact1' element={<Contact1 />}/>
          <Route path = '/About1' element = {<About1 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

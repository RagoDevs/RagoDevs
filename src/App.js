import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home'
import About from '../src/Pages/About';
import Services from '../src/Pages/Services';
import Contact from '../src/Pages/Contact';

function App() {
  return (
    <Routes>
      <Route 
        path=''
        element={
          <Home />
        }
      />
      <Route 
        path='/about'
        element={
          <About />
        }
      />
      <Route 
        path='/services'
        element={
          <Services />
        }
      />
      <Route 
        path='/contact'
        element={
          <Contact />
        }
      />
    </Routes>
  );
}

export default App;

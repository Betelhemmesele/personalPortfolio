import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />}/>
         <Route path="/skills" element={<Skills />}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
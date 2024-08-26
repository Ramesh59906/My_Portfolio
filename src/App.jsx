import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OffcanvasExample from './Component/OffcanvasExample';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Skill from './Component/Skill';
import CustomCursor from "./CustomCursor"

function App() {
  return (
    <Router>
      <OffcanvasExample />
      <CustomCursor/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

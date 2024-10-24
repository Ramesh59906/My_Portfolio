
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OffcanvasExample from './Component/OffcanvasExample';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Skill from './Component/Skill';
import CustomCursor from "./CustomCursor";
import { ScaleLoader } from 'react-spinners';  // Import the spinner

function App() {
  const [loading, setLoading] = useState(true);  // State for loading

  useEffect(() => {
    // Simulate a delay (e.g., waiting for page content or API data)
    const timer = setTimeout(() => {
      setLoading(false);  // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);  // Clean up the timer
  }, []);

  if (loading) {
    return (
      <div className="spinner-container d-flex justify-content-center align-items-center vh-100">
        {/* Display the spinner while loading */}
        <ScaleLoader color={"#00e2e2"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <Router>
      <OffcanvasExample />
      <CustomCursor />
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

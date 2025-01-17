import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
// import Skills from './Components/Skills';
// import Contact from './Components/Contact';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* Home as the default route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

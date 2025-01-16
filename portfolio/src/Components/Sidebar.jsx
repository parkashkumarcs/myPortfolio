import React, { useState } from 'react';
import '../Styles/Sidebar.css'; // Separate file for styles
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Sidebar toggle button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li>
            <a href="#about">
              <FaUser className="icon" />
              About
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram className="icon" />
              Projects
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaTools className="icon" />
              Skills
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope className="icon" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

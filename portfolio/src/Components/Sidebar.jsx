import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <FaHome className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              <FaUser className="icon" />
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleSidebar}>
              <FaProjectDiagram className="icon" />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleSidebar}>
              <FaTools className="icon" />
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              <FaEnvelope className="icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

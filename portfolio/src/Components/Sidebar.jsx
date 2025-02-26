import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Sidebar.module.css';
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarToggle} onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <ul className={styles.sidebarMenu}>
          <li className={styles.sidebarMenuItem}>
            <Link
              to="/"
              onClick={toggleSidebar}
              className={styles.sidebarMenuItemLink}
            >
              <FaHome className={styles.icon} />
              Home
            </Link>
          </li>
          <li className={styles.sidebarMenuItem}>
            <Link
              to="/about"
              onClick={toggleSidebar}
              className={styles.sidebarMenuItemLink}
            >
              <FaUser className={styles.icon} />
              About Me
            </Link>
          </li>
          <li className={styles.sidebarMenuItem}>
            <Link
              to="/project"
              onClick={toggleSidebar}
              className={styles.sidebarMenuItemLink}
            >
              <FaProjectDiagram className={styles.icon} />
              Projects
            </Link>
          </li>
          <li className={styles.sidebarMenuItem}>
            <Link
              to="/skills"
              onClick={toggleSidebar}
              className={styles.sidebarMenuItemLink}
            >
              <FaTools className={styles.icon} />
              Skills
            </Link>
          </li>
          <li className={styles.sidebarMenuItem}>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className={styles.sidebarMenuItemLink}
            >
              <FaEnvelope className={styles.icon} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

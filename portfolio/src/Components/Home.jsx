import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Home.module.css'; // Updated import for CSS module
import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

// Importing images for each card
import aboutImages1 from '../assets/certified.jpg';
import aboutImages2 from '../assets/me.jpg';
import aboutImages3 from '../assets/exp.jpg';

import projectImage1 from '../assets/project.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';
import projectImage4 from '../assets/project4.jpg';

import skillsImage1 from '../assets/skills.jpg';
import skillsImage2 from '../assets/skills2.jpg';
import skillsImage3 from '../assets/skills3.jpg';
import skillsImage4 from '../assets/project3.jpg';

import contactImage1 from '../assets/contact.jpg';
import contactImage2 from '../assets/contact2.jpg';
import contactImage3 from '../assets/contact3.jpg';
import contactImage4 from '../assets/contact4.jpg';

// Arrays for images
const aboutImages = [aboutImages1, aboutImages2, aboutImages3];
const projectImages = [projectImage1, projectImage2, projectImage3, projectImage4];
const skillsImages = [skillsImage1, skillsImage2, skillsImage3, skillsImage4];
const contactImages = [contactImage1, contactImage2, contactImage3, contactImage4];

const Home = () => {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState(0);
  const [skillsImageIndex, setSkillsImageIndex] = useState(0);
  const [contactImageIndex, setContactImageIndex] = useState(0);

  useEffect(() => {
    // Function to update image index for each card
    const updateImageIndex = () => {
      setAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
      setProjectImageIndex((prev) => (prev + 1) % projectImages.length);
      setSkillsImageIndex((prev) => (prev + 1) % skillsImages.length);
      setContactImageIndex((prev) => (prev + 1) % contactImages.length);
    };

    // Change images every 5 seconds
    const interval = setInterval(updateImageIndex, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome :)</h1>
      <div className={styles.cardGrid}>
        {/* About Me Card */}
        <Link to="/about" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src={aboutImages[aboutImageIndex]}
              alt="About"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.contentBox}>
            <FaUser className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>About Me</h2>
          </div>
          <p className={styles.cardDescription}>Learn more about me and my journey.</p>
        </Link>
        {/* Projects Card */}
        <Link to="/projects" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src={projectImages[projectImageIndex]}
              alt="Projects"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.contentBox}>
            <FaProjectDiagram className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Projects</h2>
          </div>
          <p className={styles.cardDescription}>Explore my completed and ongoing projects.</p>
        </Link>
        {/* Skills Card */}
        <Link to="/skills" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src={skillsImages[skillsImageIndex]}
              alt="Skills"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.contentBox}>
            <FaTools className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Skills</h2>
          </div>
          <p className={styles.cardDescription}>Discover the tools and technologies I use.</p>
        </Link>
        {/* Contact Card */}
        <Link to="/contact" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src={contactImages[contactImageIndex]}
              alt="Contact"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.contentBox}>
            <FaEnvelope className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Contact</h2>
          </div>
          <p className={styles.cardDescription}>Get in touch with me for collaborations or inquiries.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

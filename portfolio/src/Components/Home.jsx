import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Home.module.css'; 
import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

// Import static images
import certified from '../assets/certified.jpg';
import me from '../assets/me.jpg';
import exp from '../assets/exp.jpg';

import project1 from '../assets/project.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

import skills1 from '../assets/skills.jpg';
import skills2 from '../assets/skills2.jpg';
import skills3 from '../assets/skills3.jpg';

import contact1 from '../assets/contact.jpg';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.jpg';
import contact4 from '../assets/contact4.jpg';

// Map icons dynamically
const icons = {
  FaUser: <FaUser />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaTools: <FaTools />,
  FaEnvelope: <FaEnvelope />,
};

// Image mapping for dynamic loading
const imagesMap = {
  'certified.jpg': certified,
  'me.jpg': me,
  'exp.jpg': exp,
  'project.jpg': project1,
  'project2.jpg': project2,
  'project3.jpg': project3,
  'project4.jpg': project4,
  'skills.jpg': skills1,
  'skills2.jpg': skills2,
  'skills3.jpg': skills3,
  'contact.jpg': contact1,
  'contact2.jpg': contact2,
  'contact3.jpg': contact3,
  'contact4.jpg': contact4,
};

const Home = () => {
  const [sections, setSections] = useState([]);
  const [imageIndexes, setImageIndexes] = useState({});

  useEffect(() => {
    // Fetch data from backend
    const fetchHomeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/home');
        const data = await response.json();
        setSections(data);

        // Initialize index for each section to 0
        const initialIndexes = {};
        data.forEach((section) => {
          initialIndexes[section.title] = 0;
        });
        setImageIndexes(initialIndexes);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchHomeData();

    // Image rotation interval
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        sections.reduce((newIndexes, section) => {
          newIndexes[section.title] = (prevIndexes[section.title] + 1) % section.images.length;
          return newIndexes;
        }, {})
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sections]);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome :)</h1>
      <div className={styles.cardGrid}>
        {sections.map((section) => (
          <Link to={section.route} className={styles.card} key={section.id}>
            <div className={styles.cardImageContainer}>
              <img
                src={imagesMap[section.images[imageIndexes[section.title]]]}
                alt={section.title}
                className={styles.cardImage}
                loading="lazy"
              />
            </div>
            <div className={styles.contentBox}>
              <div className={styles.cardIcon}>{icons[section.icon]}</div>
              <h2 className={styles.cardTitle}>{section.title}</h2>
            </div>
            <p className={styles.cardDescription}>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

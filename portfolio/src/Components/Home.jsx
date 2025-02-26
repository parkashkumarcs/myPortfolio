import React, { useState, useEffect, useCallback, useReducer, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

import aboutImages1 from "../assets/certified.jpg";
import aboutImages2 from "../assets/me.jpg";
import aboutImages3 from "../assets/exp.jpg";

import projectImage1 from "../assets/project.jpg";
import projectImage2 from "../assets/project2.jpg";
import projectImage3 from "../assets/project3.jpg";
import projectImage4 from "../assets/project4.jpg";

import skillsImage1 from "../assets/skills.jpg";
import skillsImage2 from "../assets/skills2.jpg";
import skillsImage3 from "../assets/skills3.jpg";
import skillsImage4 from "../assets/project3.jpg";

import contactImage1 from "../assets/contact.jpg";
import contactImage2 from "../assets/contact2.jpg";
import contactImage3 from "../assets/contact3.jpg";
import contactImage4 from "../assets/contact4.jpg";

const images = {
  about: [aboutImages1, aboutImages2, aboutImages3],
  project: [projectImage1, projectImage2, projectImage3, projectImage4],
  skills: [skillsImage1, skillsImage2, skillsImage3, skillsImage4],
  contact: [contactImage1, contactImage2, contactImage3, contactImage4],
};

const imageReducer = (state, action) => ({
  ...state,
  [action.category]: (state[action.category] + 1) % images[action.category].length,
});

const Home = () => {
  // Using a single reducer for state management
  const [imageIndex, dispatch] = useReducer(imageReducer, {
    about: 0,
    project: 0,
    skills: 0,
    contact: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(images).forEach((category) => {
        dispatch({ category });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // This is function to handle image click
  const handleImageClick = useCallback((category, index) => {
    dispatch({ category, newIndex: index });
  }, []);

  // Following is memoize the rendering of dots to prevent unnecessary re-renders
  const renderDots = useCallback(
    (category) => (
      <div className={styles.dotsContainer}>
        {images[category].map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === imageIndex[category] ? styles.activeDot : ""}`}
            onClick={() => handleImageClick(category, index)}
          />
        ))}
      </div>
    ),
    [imageIndex, handleImageClick]
  );

  // Below the grid of cards for performance improvements
  const cards = useMemo(
    () =>
      ["about", "project", "skills", "contact"].map((category, i) => {
        const icons = [FaUser, FaProjectDiagram, FaTools, FaEnvelope];
        const titles = ["About Me", "Projects", "Skills", "Contact"];
        const descriptions = [
          "Learn more about me and my journey.",
          "Explore my completed and ongoing projects.",
          "Discover the tools and technologies I use.",
          "Get in touch with me for collaborations or inquiries.",
        ];

        const Icon = icons[i];

        return (
          <Link to={`/${category}`} className={styles.card} key={category}>
            <div className={styles.cardImageContainer}>
              <img
                src={images[category][imageIndex[category]]}
                alt={titles[i]}
                className={styles.cardImage}
                loading="lazy"
              />
              {renderDots(category)}
            </div>
            <div className={styles.contentBox}>
              <Icon className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>{titles[i]}</h2>
            </div>
            <p className={styles.cardDescription}>{descriptions[i]}</p>
          </Link>
        );
      }),
    [imageIndex, renderDots]
  );

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome :)</h1>
      <div className={styles.cardGrid}>
        {cards}
      </div>
    </div>
  );
};

export default Home;

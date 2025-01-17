import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import {FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

// Importing images for each card
import aboutImages1 from '../assets/project.jpg';
import aboutImages2 from '../assets/me.jpg';
import aboutImages3 from '../assets/skills2.jpg';
import aboutImages4 from '../assets/contact.jpg';


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
const aboutImages = [aboutImages1, aboutImages2, aboutImages3,aboutImages4];
const projectImages = [projectImage1, projectImage2, projectImage3,projectImage4];
const skillsImages = [skillsImage1, skillsImage2, skillsImage3,skillsImage4];
const contactImages = [contactImage1, contactImage2, contactImage3,contactImage4];

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

    // Change images every 3 seconds
    const interval = setInterval(updateImageIndex, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
        <h1 className="home-title">Welcome 😊</h1>
        <div className="card-grid">

        <Link to="/about" className="card">
            <div className="card-image-container">
                <img
                    src={aboutImages[aboutImageIndex]}
                    alt="Projects"
                    className="card-image"
                    loading="lazy"
                />
            </div>
            <div className='content-box'>
                <FaUser className="card-icon" />
                <h2 className="card-title">About Me</h2>
            </div>
            
            <p className="card-description">Learn more about me and my journey.</p>
        </Link>
        {/* Projects Card */}
        <Link to="/projects" className="card">
        <div className="card-image-container">
            <img
              src={projectImages[projectImageIndex]}
              alt="Projects"
              className="card-image"
              loading="lazy"
            />
            </div>
            <div className='content-box'>
                <FaProjectDiagram className="card-icon" />
                <h2 className="card-title">Projects</h2>
            </div>    
            <p className="card-description">Explore my completed and ongoing projects.</p>
        </Link>

        {/* Skills Card */}
        <Link to="/skills" className="card">
        <div className="card-image-container">
            <img
              src={skillsImages[skillsImageIndex]}
              alt="Skills"
              className="card-image"
              loading="lazy"
            />
          </div>    
          <div className='content-box'>
            <FaTools className="card-icon" />
            <h2 className="card-title">Skills</h2>
          </div> 
            <p className="card-description">Discover the tools and technologies I use.</p>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="card">
        <div className="card-image-container">
            <img
              src={contactImages[contactImageIndex]}
              alt="Contact"
              className="card-image"
              loading="lazy"
            />
            </div>
            <div className='content-box'>
                <FaEnvelope className="card-icon" />
                <h2 className="card-title">Contact</h2>
            </div>    
            <p className="card-description">Get in touch with me for collaborations or inquiries.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

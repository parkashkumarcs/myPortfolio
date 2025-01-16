import React from 'react';
import '../Styles/Hero.css'; // Styles for Hero component
import heroImage from '../assets/me.jpg'; // Replace with your image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Parkash Kumar</span>
        </h1>
        <h2 className="hero-subtitle">A Passionate Frontend Developer</h2>
        <p className="hero-description">
          I am a Frontend Developer with 1 year of experience specializing in creating professional,
          responsive, and user-friendly websites and applications. My expertise lies in building fully
          functional and reusable components that bring ideas to life. I have worked on diverse projects,
          including an EVS System and an App Store Portfolio website, showcasing my ability to craft
          dynamic and interactive user interfaces. Whether it’s developing sleek designs or optimizing
          for performance, I am passionate about delivering exceptional digital experiences.
        </p>
        <h2 className="hero-subtitle">Let’s collaborate and build something amazing together!</h2>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>
          <a href="/resume.pdf" className="btn secondary-btn" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="diagonal-box"></div>
      </div>
    </section>
  );
};

export default Hero;

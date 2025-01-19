import React from 'react';
import styles from '../Styles/About.module.css';
import myImage from '../assets/me.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>
          Hi, I'm <span className={styles.highlight}>Parkash Kumar</span>
        </h1>
        <h2 className={styles.aboutSubtitle}>A Passionate Frontend & Backend Developer</h2>
        <p className={styles.aboutDescription}>
          I am a Frontend and Backend Developer with 1 year of experience specializing in creating 
          professional, responsive, and user-friendly websites and applications. My expertise lies in 
          building fully functional and reusable components that bring ideas to life. Beyond frontend 
          development, I have hands-on experience in backend technologies, enabling me to design and 
          implement robust APIs, manage databases, and ensure seamless integration between frontend 
          and backend systems. I have worked on diverse projects, including an EVS System, an App 
          Store, Portfolios, and websites, showcasing my ability to craft dynamic and interactive user 
          interfaces while maintaining efficient and secure server-side functionality. Whether it’s 
          developing sleek designs, optimizing performance, or architecting scalable backend solutions, 
          I am passionate about delivering exceptional digital experiences.
        </p>
        <h2 className={styles.aboutSubtitle}>Let’s collaborate and build something amazing together!</h2>
        <div className={styles.aboutButtons}>
          <a href="#projects" className={`${styles.btn} ${styles.primaryBtn}`}>
            View My Work
          </a>
          <a href="/resume.pdf" className={`${styles.btn} ${styles.secondaryBtn}`} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.aboutImageContainer}>
        <img src={myImage} alt="about" className={styles.aboutImage} />
        <div className={styles.diagonalBox}></div>
      </div>
    </section>
  );
};

export default About;

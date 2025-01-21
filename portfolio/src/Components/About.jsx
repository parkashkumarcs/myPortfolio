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
        <p className={styles.aboutDescription}>
          I am a computer scientist. I have graduated from Sukkur IBA University in 2025. I completed my Matriculation and Intermediate at BISE Mirpurkhas Board.
        </p>
        
        <div className={styles.aboutItems}>
          <h2 className={styles.aboutSubtitle}>Frontend Developer</h2>
          <p className={styles.aboutDescription}>
            I am a passionate Frontend Developer with 1 year of experience in building professional, 
            responsive, and user-friendly websites and applications. My expertise lies in developing 
            fully functional and reusable components that bring ideas to life. I focus on:
          </p>
          <ul className={styles.aboutList}>
            <li>Creating sleek and modern UI designs that enhance user experience.</li>
            <li>Ensuring cross-browser compatibility and responsive layouts.</li>
            <li>Optimizing frontend performance for fast and seamless interactions.</li>
            <li>Utilizing the latest frontend technologies to deliver engaging interfaces.</li>
          </ul>
          <p className={styles.aboutDescription}>
            I have successfully contributed to projects like EVS System, App Store, Portfolios, and various websites, ensuring a dynamic and interactive user experience.
          </p>
        </div>

        <div className={styles.aboutItems}>
          <h2 className={styles.aboutSubtitle}>Backend Developer</h2>
          <p className={styles.aboutDescription}>
            I am a passionate Backend Developer with experience in designing and implementing robust APIs, managing databases, and ensuring smooth integration between frontend and backend systems. I focus on:
          </p>
          <ul className={styles.aboutList}>
            <li>Building scalable and efficient server-side applications.</li>
            <li>Ensuring data security and system reliability.</li>
            <li>Seamlessly integrating frontend and backend components for optimal performance.</li>
            <li>Optimizing database management and query performance.</li>
          </ul>
          <p className={styles.aboutDescription}>
            I have worked on projects like EVS System, App Store, and other platforms, ensuring robust backend solutions that support efficient and secure operations.
          </p>
        </div>

        <div className={styles.aboutItems}>
          <h2 className={styles.aboutSubtitle}>UI Designer</h2>
          <p className={styles.aboutDescription}>
            With a strong eye for design and usability, I craft intuitive, visually appealing user interfaces. My design process includes:
          </p>
          <ul className={styles.aboutList}>
            <li>Designing modern, user-friendly UI elements that align with brand identity.</li>
            <li>Collaborating with developers to implement pixel-perfect designs.</li>
            <li>Prototyping and iterating UI elements to improve usability.</li>
            <li>Ensuring a seamless design-to-development handoff.</li>
          </ul>
          <p className={styles.aboutDescription}>
            My contributions as a UI Designer have been instrumental in building aesthetically pleasing and functional interfaces for projects such as Portfolios, websites, and apps.
          </p>
        </div>

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

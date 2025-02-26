import React, { useState, useEffect } from 'react';
import styles from '../Styles/Project.module.css';

import projectImage1 from '../assets/project.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';
import projectImage4 from '../assets/project4.jpg';

const projects = [
  {
    id: "project1",
    title: "Project One",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
  {
    id: "project2",
    title: "Project Two",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
  {
    id: "project3",
    title: "Project Three",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
  {
    id: "project4",
    title: "Project Four",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
  {
    id: "project5",
    title: "Project Five",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
  {
    id: "project6",
    title: "Project Six",
    description: "An innovative solution for modern problems.",
    techStack: ["React.js", "Node.js", "CSS"],
    images: [projectImage1, projectImage2, projectImage3, projectImage4],
  },
];

const Project = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCircleClick = (projectIndex, imageIndex) => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((index, i) => (i === projectIndex ? imageIndex : index))
    );
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.secTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() =>
              document.getElementById(project.id)?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <div className={styles.projectImageContainer}>
              <img
                src={project.images[currentImageIndex[i]]}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.circlesContainer}>
                {project.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.circle} ${
                      currentImageIndex[i] === idx ? styles.activeCircle : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleCircleClick(i, idx);
                    }}
                  ></span>
                ))}
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <ul className={styles.projectTechStack}>
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {projects.map((project) => (
        <div key={project.id} id={project.id} className={styles.projectDetails}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.techStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Project;

import React, { useState, useEffect } from 'react';
import styles from '../Styles/Project.module.css'; // Import CSS Module

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
  // Add additional projects here
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

  const handleCardClick = (projectId) => {
    document.getElementById(projectId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.secTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => handleCardClick(project.id)}
          >
            <div className={styles.projectImageContainer}>
              <img
                src={project.images[currentImageIndex[i]]}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
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

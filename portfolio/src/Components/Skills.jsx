import React from "react";
import styles from "../Styles/Skills.module.css"; // Updated import for CSS module
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFigma,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const skillsData = [
  {
    category: "Web Development",
    subcategories: [
      {
        name: "Frontend",
        skills: [
          { name: "HTML", icon: <FaHtml5 />, certificate: "certificates/html_certificate.pdf" },
          { name: "CSS", icon: <FaCss3Alt />, certificate: "certificates/css_certificate.pdf" },
          { name: "JavaScript", icon: <FaJs />, certificate: "certificates/javascript_certificate.pdf" },
          { name: "React.js", icon: <FaReact /> },
        ],
      },
      {
        name: "Backend",
        skills: [
          { name: "Node.js", icon: <FaNodeJs />, certificate: "certificates/nodejs_certificate.pdf" },
          { name: "MongoDB", icon: <SiMongodb /> },
        ],
      },
    ],
  },
  {
    category: "Python Development",
    subcategories: [
      {
        name: "Libraries",
        skills: [
          { name: "Django", icon: <SiDjango /> },
          { name: "Pandas", icon: <SiPandas /> },
          { name: "NumPy", icon: <SiNumpy /> },
        ],
      },
      {
        name: "Tools",
        skills: [
          { name: "Python", icon: <FaPython />, certificate: "certificates/python_certificate.pdf" },
        ],
      },
    ],
  },
  {
    category: "Databases",
    subcategories: [
      {
        name: "Database Technologies",
        skills: [
          { name: "MySQL", icon: <SiMysql />, certificate: "certificates/mysql_certificate.pdf" },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "Firebase", icon: <SiFirebase /> },
        ],
      },
    ],
  },
  {
    category: "Tools",
    subcategories: [
      {
        name: "Development Tools",
        skills: [
          { name: "Git", icon: <FaGitAlt /> },
          { name: "Figma", icon: <SiFigma /> },
        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>My Skills</h2>
      <div className={styles.skillsContainer}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.skillsCategory}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            {category.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className={styles.skillsSubcategory}>
                <h4 className={styles.subcategoryTitle}>{subcategory.name}</h4>
                <div className={styles.skillsList}>
                  {subcategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillIcon}>{skill.icon}</div>
                      <p className={styles.skillName}>{skill.name}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.certificatesList}>
                  {subcategory.skills
                    .filter((skill) => skill.certificate)
                    .map((skill, certIndex) => (
                      <a
                        key={certIndex}
                        href={skill.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certificateLink}
                      >
                        View {skill.name} Certificate
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

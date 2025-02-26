import React, { useState } from "react";
import styles from "../Styles/Contact.module.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      //It will handle form submission (e.g., send to backend or email service)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Get in Touch</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={errors.name ? styles.errorInput : ""}
            />
            {errors.name && <small className={styles.errorText}>{errors.name}</small>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && <small className={styles.errorText}>{errors.email}</small>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              className={errors.message ? styles.errorInput : ""}
            ></textarea>
            {errors.message && <small className={styles.errorText}>{errors.message}</small>}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
          {isSubmitted && <p className={styles.successMessage}>Thank you for your message!</p>}
        </form>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <ul className={styles.footerLinks}>
            <li>
              <a
                href="https://www.linkedin.com/in/parkashkumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/parkashkumarcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/parkashkumar.parkashkumar.35380399/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com">
                <FaEnvelope /> Email
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <FaPhone /> +923 4056-21118
            </li>
          </ul>
          <p>&copy; 2025 Parkash Kumar. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

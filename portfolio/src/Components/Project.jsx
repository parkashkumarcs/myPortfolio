import React, { useState, useEffect } from "react";
import "../Styles/Project.css"; // Import the CSS file for styling
import image1 from "../assets/contact.jpg";
import image2 from "../assets/design.jpg";
import image3 from "../assets/me.jpg";
import image4 from "../assets/project.jpg";

const Project = () => {
  // Array of image URLs
  const images = [image1, image2, image3, image4];

  // State to hold the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the image index
    const updateImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Change image every 3 seconds
    const interval = setInterval(updateImage, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project">
      <img
        src={images[currentImageIndex]}
        alt="Random"
        className="project-image"
      />
      <div className="p roject-content">
        <h2>Auto-Changing Image Project</h2>
        <p>This Project changes its image automatically every 3 seconds.</p>
      </div>
    </div>
  );
};

export default Project;

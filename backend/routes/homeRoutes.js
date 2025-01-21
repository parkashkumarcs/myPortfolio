const express = require('express');
const router = express.Router();

// Sample data to be served from the backend
const homeData = [
  {
    id: 1,
    title: 'About Me',
    description: 'Learn more about me and my journey.',
    icon: 'FaUser',
    images: ['certified.jpg', 'me.jpg', 'exp.jpg'],
    route: '/about',
  },
  {
    id: 2,
    title: 'Projects',
    description: 'Explore my completed and ongoing projects.',
    icon: 'FaProjectDiagram',
    images: ['project.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'],
    route: '/projects',
  },
  {
    id: 3,
    title: 'Skills',
    description: 'Discover the tools and technologies I use.',
    icon: 'FaTools',
    images: ['skills.jpg', 'skills2.jpg', 'skills3.jpg', 'project3.jpg'],
    route: '/skills',
  },
  {
    id: 4,
    title: 'Contact',
    description: 'Get in touch with me for collaborations or inquiries.',
    icon: 'FaEnvelope',
    images: ['contact.jpg', 'contact2.jpg', 'contact3.jpg', 'contact4.jpg'],
    route: '/contact',
  },
];

// Route to get home page data
router.get('/', (req, res) => {
  res.json(homeData);
});

module.exports = router;

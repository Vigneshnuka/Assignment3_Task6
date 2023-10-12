// Projects.js

import React from 'react';
import '../App.css';

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
             
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

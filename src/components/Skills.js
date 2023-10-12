// Skills.js

import React from 'react';
import '../App.css';

const Skills = ({ skills }) => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skill-boxes">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

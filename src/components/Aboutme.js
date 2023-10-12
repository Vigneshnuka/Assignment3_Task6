import React from 'react';
import '../App.css';

const AboutMe = ({ aboutMe }) => {
  return (
    <section>
      <h2>About Me</h2>
      <p>{aboutMe}</p>
    </section>
  );
};

export default AboutMe;

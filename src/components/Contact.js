// Contact.js

import React from 'react';
import '../App.css';

const Contact = ({ contact }) => {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: {contact.email}</p>
      <p>LinkedIn: {contact.linkedin}</p>
      <p>GitHub: {contact.github}</p>
    </section>
  );
};

export default Contact;

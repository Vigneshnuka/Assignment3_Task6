import React from 'react';

const Certificates = ({ certificates }) => {
  return (
    <section>
      <h2>Certificates</h2>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;

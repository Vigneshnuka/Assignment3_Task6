import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates'; // Import Certificates component
import Contact from './components/Contact';
import portfolioData from './components/portfolioData';

function App() {
  return (
    <div className="App">
      <Header 
      name={portfolioData.name} 
      tagline={portfolioData.tagline}
      />
      <AboutMe aboutMe={portfolioData.aboutMe} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Certificates certificates={portfolioData.certificates} /> {/* Use Certificates component */}
      <Contact contact={portfolioData.contact} />
    </div>
  );
}

export default App;

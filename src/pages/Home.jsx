import React from 'react';
import CaseStudies from '../components/CaseStudies';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <CaseStudies />
    </div>
  );
};

export default Home;

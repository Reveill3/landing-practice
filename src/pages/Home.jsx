import React from 'react';
import CaseStudies from '../components/CaseStudies';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { Services, AnimatedServices } from '../components/Services';
import { useBreakpoint } from 'use-breakpoint';
import FAQ from '../components/FAQ';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1080 };

const Home = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <div>
      <Hero />
      {breakpoint === 'desktop' ? <AnimatedServices /> : <Services />}
      <Projects />
      <CaseStudies />
      <FAQ />
    </div>
  );
};

export default Home;

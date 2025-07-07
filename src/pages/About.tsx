
import React from 'react';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import AboutHero from '../components/about/AboutHero';
import PersonalQuote from '../components/about/PersonalQuote';
import Timeline from '../components/about/Timeline';
import Achievements from '../components/about/Achievements';
import PreityMethod from '../components/about/PreityMethod';

const About = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <CustomCursor />
      <Navigation />
      
      <AboutHero />
      <PersonalQuote />
      <Timeline />
      <Achievements />
      <PreityMethod />
    </div>
  );
};

export default About;

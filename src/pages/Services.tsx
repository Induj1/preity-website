
import React from 'react';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import WhoIsThisFor from '../components/services/WhoIsThisFor';
import ServicesFAQ from '../components/services/ServicesFAQ';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <CustomCursor />
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <WhoIsThisFor />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};

export default Services;

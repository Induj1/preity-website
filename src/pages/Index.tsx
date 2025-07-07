
import React from 'react';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import HeroSection from '../components/home/HeroSection';
import QuickNavigationTiles from '../components/home/QuickNavigationTiles';
import InspirationalQuote from '../components/home/InspirationalQuote';
import AchievementHighlights from '../components/home/AchievementHighlights';
import CTASection from '../components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <HeroSection />
      <QuickNavigationTiles />
      <InspirationalQuote />
      <AchievementHighlights />
      <CTASection />
    </div>
  );
};

export default Index;

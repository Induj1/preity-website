
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="pt-24 pb-16 px-6">
      <motion.div 
        className="container mx-auto max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-playfair font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          My Journey of Transformation
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          From fashion industry professional to globally recognized transformation coach, 
          my path has been one of resilience, growth, and unwavering commitment to helping others shine.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;

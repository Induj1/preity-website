
import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <motion.div 
        className="container mx-auto max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-4 sm:mb-6 gradient-text px-2"
          variants={itemVariants}
        >
          Transform Your Life
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4"
          variants={itemVariants}
        >
          Choose from our comprehensive programs designed to unlock your confidence, 
          enhance your style, and transform your mindset.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServicesHero;

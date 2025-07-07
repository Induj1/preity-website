
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
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
          Let's Connect
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Ready to start your transformation journey? I'm here to guide you every step of the way. 
          Let's have a conversation about your goals and dreams.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;


import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

const ServicesCTA = () => {
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
    <section className="py-20 px-6 bg-gradient-to-r from-gold/10 to-violet/10">
      <motion.div
        className="container mx-auto text-center max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          variants={itemVariants}
        >
          Ready to <span className="gradient-text">Begin Your Transformation?</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Book a free 15-minute discovery call to discuss which program is perfect for your goals.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <CTAButton size="lg" className="text-xl px-12 py-4">
            Book Free Discovery Call
          </CTAButton>
          <CTAButton variant="outline" size="lg" className="text-xl px-12 py-4">
            WhatsApp Me
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;

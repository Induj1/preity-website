
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import { MessageCircle } from 'lucide-react';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
          Ready to <span className="gradient-text">Transform Your Life?</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Take the first step towards becoming the confident, authentic version of yourself. 
          Book your free discovery call today.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <CTAButton size="lg" className="text-xl px-12 py-4">
            <MessageCircle className="inline-block mr-3" size={24} />
            Start Your Transformation Journey
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;

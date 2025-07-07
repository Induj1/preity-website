
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

const PreityMethod = () => {
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

  const methodSteps = ['Attitude', 'Confidence', 'Expression', 'Presence', 'Transformation'];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold mb-8 gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          The Preity Method™
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-12 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          My unique 5-step transformation framework that has helped thousands discover their authentic selves
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {methodSteps.map((step, index) => (
            <motion.div
              key={step}
              className="flex items-center"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-gold to-violet text-white px-6 py-3 rounded-full font-playfair font-semibold text-lg shadow-lg">
                {step}
              </div>
              {index < 4 && (
                <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-violet mx-2 hidden md:block"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <CTAButton size="lg" className="text-xl px-12 py-4">
            Experience The Preity Method™
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default PreityMethod;

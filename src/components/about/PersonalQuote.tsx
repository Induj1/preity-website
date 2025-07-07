import React from 'react';
import { motion } from 'framer-motion';

const PersonalQuote = () => {
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
    <section className="py-16 px-6 bg-gradient-to-r from-gold/5 to-violet/5">
      <motion.div
        className="container mx-auto max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <blockquote className="text-3xl md:text-4xl font-playfair font-bold text-deep-charcoal mb-6">
          "Like a trampoline, the lower I'm pushed, the higher I rise."
        </blockquote>
        <p className="text-xl text-gray-600">— Preity Baney</p>
      </motion.div>
    </section>
  );
};

export default PersonalQuote;


import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import { Calendar } from 'lucide-react';

const CalendarSection = () => {
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
    <section className="py-20 px-6 bg-gradient-to-r from-blush/20 to-ivory">
      <motion.div
        className="container mx-auto max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold mb-8 gradient-text"
          variants={itemVariants}
        >
          Book Your Free Discovery Call
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Ready to take the first step? Schedule a complimentary 15-minute discovery call 
          to discuss your goals and how I can help you achieve them.
        </motion.p>
        
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl"
          variants={itemVariants}
        >
          <div className="aspect-video bg-gradient-to-br from-gold/10 to-violet/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Calendar className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-2xl font-playfair font-bold text-deep-charcoal mb-2">
                Calendar Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Calendly widget would be embedded here
              </p>
              <CTAButton size="lg">
                Schedule Discovery Call
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CalendarSection;

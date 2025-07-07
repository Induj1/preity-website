import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import FloatingElements from '../FloatingElements';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
      <FloatingElements />
      
      <motion.div 
        className="text-center z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight gradient-text px-2"
          variants={itemVariants}
        >
          Preity Baney
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 font-inter px-4"
          variants={itemVariants}
        >
          ICF-Certified Life Coach • NLP Practitioner • Global Style Coach™
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          <CTAButton size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
            <MessageCircle className="inline-block mr-2" size={20} />
            Book Discovery Call
          </CTAButton>
          <CTAButton variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
            Explore Programs
            <ArrowRight className="inline-block ml-2" size={20} />
          </CTAButton>
        </motion.div>

        {/* Video Introduction */}
        <motion.div 
          className="relative inline-block px-4"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-sm sm:max-w-md mx-auto glass-effect">
            <div className="aspect-video bg-gradient-to-br from-blush to-ivory rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <motion.button
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-700">
              Watch: My Personal Transformation Story (60s)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

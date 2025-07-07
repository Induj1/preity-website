
import React from 'react';
import { motion } from 'framer-motion';

const InspirationalQuote = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blush via-ivory to-blush overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <span className="text-4xl md:text-6xl font-playfair font-bold gradient-text mx-8">
          You are unique. Own it. Flaunt it. Be You. 
        </span>
        <span className="text-4xl md:text-6xl font-playfair font-bold gradient-text mx-8">
          You are unique. Own it. Flaunt it. Be You. 
        </span>
      </motion.div>
    </section>
  );
};

export default InspirationalQuote;

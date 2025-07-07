
import React from 'react';
import { motion } from 'framer-motion';

const AchievementHighlights = () => {
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

  const stats = [
    {
      number: "3,500+",
      label: "Students Trained",
      description: "Lives transformed across all age groups"
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "Global expertise in fashion & coaching"
    },
    {
      number: "5-82",
      label: "Age Range",
      description: "From children to seniors, all thrive"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="gradient-text">Proven Track Record</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 25 years of transforming lives across the globe
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-deep-charcoal mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementHighlights;


import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Heart } from 'lucide-react';

const WhoIsThisFor = () => {
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

  const personas = [
    {
      title: "Corporate Leaders",
      description: "Executives and professionals seeking to enhance their leadership presence",
      icon: Award,
      color: "from-gold to-yellow-400"
    },
    {
      title: "Teens & Youth",
      description: "Young individuals building confidence and discovering their authentic selves",
      icon: Sparkles,
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Healers & Speakers",
      description: "Therapists, coaches, and public speakers wanting to amplify their impact",
      icon: Heart,
      color: "from-violet to-purple-400"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blush/20 to-ivory">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          Who Do I Work With?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${persona.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <persona.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-deep-charcoal mb-4">
                {persona.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

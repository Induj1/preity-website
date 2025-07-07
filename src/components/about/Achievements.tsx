
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Star, BookOpen, Sparkles } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: "ICF Certified Life Coach",
      description: "International Coach Federation certification in professional coaching",
      icon: Award
    },
    {
      title: "NLP Practitioner",
      description: "Certified in Neuro-Linguistic Programming techniques",
      icon: BookOpen
    },
    {
      title: "Global Style Coach™",
      description: "Proprietary methodology for style and confidence transformation",
      icon: Star
    },
    {
      title: "Femina Award Winner",
      description: "Recognition for outstanding contribution to women's empowerment",
      icon: Sparkles
    },
    {
      title: "London School of Style HOD",
      description: "Head of Department at prestigious fashion institution",
      icon: Users
    },
    {
      title: "Society Achievers Award",
      description: "Honored for exceptional impact in personal development",
      icon: Heart
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
          Achievements & Recognition
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-deep-charcoal mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

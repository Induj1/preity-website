
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, MessageCircle } from 'lucide-react';

const QuickNavigationTiles = () => {
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

  const tiles = [
    { icon: Users, title: 'Services', color: 'from-gold to-yellow-300' },
    { icon: Heart, title: 'Testimonials', color: 'from-violet to-purple-400' },
    { icon: Award, title: 'Blog', color: 'from-gold to-orange-400' },
    { icon: MessageCircle, title: 'Contact', color: 'from-violet to-pink-400' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {tiles.map((item, index) => (
            <motion.div
              key={item.title}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-deep-charcoal">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickNavigationTiles;

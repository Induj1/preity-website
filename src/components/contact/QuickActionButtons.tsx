
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Mail } from 'lucide-react';

const QuickActionButtons = () => {
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

  const actionButtons = [
    {
      icon: Calendar,
      title: "Book Discovery Call",
      description: "Free 15-minute consultation",
      action: "Book Now",
      gradient: "from-gold to-violet"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Instant response available",
      action: "Chat Now",
      gradient: "from-green-400 to-teal-400"
    },
    {
      icon: Mail,
      title: "Send Email",
      description: "Detailed inquiry welcome",
      action: "Email Me",
      gradient: "from-pink-400 to-rose-400"
    }
  ];

  return (
    <section className="py-12 px-6">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {actionButtons.map((button, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${button.gradient} p-6 rounded-2xl text-white text-center cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <button.icon className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-playfair font-bold mb-2">{button.title}</h3>
              <p className="text-sm opacity-90 mb-4">{button.description}</p>
              <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                {button.action}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuickActionButtons;

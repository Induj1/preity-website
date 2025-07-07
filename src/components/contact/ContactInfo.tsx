
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const ContactInfo = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Mumbai, India", "London, UK", "Virtual Sessions Worldwide"],
      color: "from-gold to-yellow-400"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+44 20 7123 4567", "WhatsApp Available"],
      color: "from-violet to-purple-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@preitybaney.com", "coaching@preitybaney.com", "Response within 24 hours"],
      color: "from-gold to-orange-400"
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["Mon-Fri: 9 AM - 6 PM IST", "Sat: 10 AM - 4 PM IST", "Emergency: By appointment"],
      color: "from-green-400 to-teal-400"
    }
  ];

  const whyChooseMe = [
    "25+ years of global experience",
    "3,500+ successful transformations",
    "ICF-Certified Life Coach",
    "Proven track record with all ages (5-82)",
    "Personalized approach for every client"
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 gradient-text">
        Get In Touch
      </h2>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
              <info.icon className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-playfair font-bold text-lg text-deep-charcoal mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-violet/10 rounded-2xl"
        variants={itemVariants}
      >
        <h3 className="font-playfair font-bold text-lg text-deep-charcoal mb-3">
          Why Choose Me?
        </h3>
        <ul className="space-y-2">
          {whyChooseMe.map((point, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;

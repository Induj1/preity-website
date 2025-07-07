
import React from 'react';
import { motion } from 'framer-motion';

const ServicesFAQ = () => {
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

  const faqs = [
    {
      question: "How long does the transformation process take?",
      answer: "The timeline varies based on your chosen program, ranging from 3-8 weeks for intensive programs. However, many clients see significant changes within the first week of working together."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes! I work with clients globally through virtual sessions. All programs are designed to be effective whether we meet in person or online."
    },
    {
      question: "What makes your approach different?",
      answer: "I combine 25+ years of fashion expertise with certified life coaching and NLP techniques. This unique blend addresses both inner confidence and outer expression simultaneously."
    },
    {
      question: "Is there ongoing support after the program?",
      answer: "Absolutely! All clients receive follow-up support and access to our community platform. Many programs include lifetime access to resources and check-in sessions."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-playfair font-semibold text-deep-charcoal mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;

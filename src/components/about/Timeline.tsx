
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Star, BookOpen, Sparkles } from 'lucide-react';

const Timeline = () => {
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

  const timelineEvents = [
    {
      year: "1999",
      title: "Fashion Industry Beginnings",
      description: "Started journey in the fashion world, working with top designers and brands",
      icon: Sparkles
    },
    {
      year: "2000",
      title: "Life-Changing Accident",
      description: "At 21, a transformative experience led to deep personal growth and self-discovery",
      icon: Heart
    },
    {
      year: "2005",
      title: "NLP & Healing Training",
      description: "Completed certifications in NLP, Life Coaching, and various healing modalities",
      icon: BookOpen
    },
    {
      year: "2010",
      title: "London School of Style",
      description: "Became Head of Department, training hundreds of style professionals",
      icon: Award
    },
    {
      year: "2015",
      title: "Coaching Brand Launch",
      description: "Founded transformational coaching practice combining style and mindset",
      icon: Star
    },
    {
      year: "2024",
      title: "3,500+ Lives Transformed",
      description: "Reached milestone of training and transforming over 3,500 individuals",
      icon: Users
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-12 sm:mb-16 gradient-text px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          My Transformation Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold to-violet opacity-30"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Mobile Timeline Line - Vertical line on left side */}
              <div className="md:hidden absolute left-6 w-0.5 h-full bg-gradient-to-b from-gold to-violet opacity-30"></div>
              
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12 md:ml-0 relative">
                  {/* Mobile timeline connector */}
                  <div className="md:hidden absolute -left-12 top-6 w-8 h-0.5 bg-gradient-to-r from-gold to-violet opacity-50"></div>
                  
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${index % 2 !== 0 ? 'md:order-2 md:ml-3 md:mr-0' : ''}`}>
                      <event.icon className="text-white" size={16} />
                    </div>
                    <span className="text-xl sm:text-2xl font-playfair font-bold gradient-text">{event.year}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-deep-charcoal mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Desktop Timeline Center Dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-gold to-violet rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              <div className="hidden md:block w-5/12"></div>

              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-4 w-4 h-4 bg-gradient-to-r from-gold to-violet rounded-full border-4 border-white shadow-lg" style={{top: '1.5rem'}}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

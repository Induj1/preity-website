
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import { Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

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

  const services = [
    {
      id: 1,
      name: "Attitude Styling",
      duration: "4 Weeks",
      investment: "₹15,000",
      description: "Transform your mindset and outer appearance for complete confidence",
      features: [
        "Personal style analysis",
        "Wardrobe audit & organization",
        "Color palette identification",
        "Confidence building sessions",
        "Style guide creation"
      ],
      ideal: "Professionals wanting to elevate their presence",
      color: "from-gold to-yellow-400"
    },
    {
      id: 2,
      name: "1:1 Confidence Boost",
      duration: "Per Session",
      investment: "₹8,000",
      description: "Intensive one-on-one coaching to unlock your inner confidence",
      features: [
        "Deep confidence assessment",
        "Personalized transformation plan",
        "NLP techniques application",
        "Mindset reprogramming",
        "Ongoing support"
      ],
      ideal: "Individuals seeking personalized attention",
      color: "from-violet to-purple-400"
    },
    {
      id: 3,
      name: "Group Transformation",
      duration: "6 Weeks",
      investment: "₹25,000",
      description: "Comprehensive program combining style, mindset, and presence",
      features: [
        "Complete style makeover",
        "Confidence building workshops",
        "Public speaking training",
        "Personal branding guidance",
        "Lifetime community access"
      ],
      ideal: "Those ready for complete transformation",
      color: "from-gold to-violet"
    },
    {
      id: 4,
      name: "Teen Empowerment",
      duration: "3 Weeks",
      investment: "₹12,000",
      description: "Specialized program for teenagers to build confidence and self-esteem",
      features: [
        "Age-appropriate style guidance",
        "Confidence building exercises",
        "Social skills development",
        "Body positivity workshops",
        "Parent guidance sessions"
      ],
      ideal: "Teenagers aged 13-19",
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 5,
      name: "Corporate Training",
      duration: "Customized",
      investment: "Contact for Quote",
      description: "Executive presence and leadership development for corporate teams",
      features: [
        "Executive presence training",
        "Leadership style development",
        "Team confidence building",
        "Communication skills",
        "Professional image consulting"
      ],
      ideal: "Corporate teams and executives",
      color: "from-blue-400 to-indigo-400"
    },
    {
      id: 6,
      name: "Healing & Wellness",
      duration: "8 Weeks",
      investment: "₹30,000",
      description: "Holistic approach combining style transformation with healing practices",
      features: [
        "Trauma-informed coaching",
        "Healing meditation sessions",
        "Energy clearing practices",
        "Holistic style guidance",
        "Wellness lifestyle planning"
      ],
      ideal: "Those seeking deep healing and transformation",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Star className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-deep-charcoal mb-2 text-center">
                {service.name}
              </h3>
              
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="text-2xl font-playfair font-bold gradient-text">
                  {service.investment}
                </div>
              </div>
              
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-center mb-4">
                <span className="text-sm text-gray-500 italic">
                  Ideal for: {service.ideal}
                </span>
              </div>
              
              {selectedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t pt-4 mt-4"
                >
                  <h4 className="font-semibold text-deep-charcoal mb-2">What's Included:</h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              <CTAButton className="w-full" size="sm">
                {service.investment.includes('Contact') ? 'Get Quote' : 'Apply Now'}
                <ArrowRight size={16} className="ml-2" />
              </CTAButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;

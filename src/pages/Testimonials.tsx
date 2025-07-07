import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import CTAButton from '../components/CTAButton';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Calendar, Award, Users, Target } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Corporate Executive",
      company: "Tech Solutions Inc.",
      image: "/placeholder.svg",
      rating: 5,
      category: "corporate",
      testimonial: "Working with Preity transformed not just my wardrobe, but my entire presence in the boardroom. I feel more confident and authentic than ever before.",
      results: "Promoted to Senior Vice President within 6 months",
      program: "Attitude Styling + 1:1 Confidence Boost"
    },
    {
      id: 2,
      name: "Ananya Patel",
      role: "Entrepreneur",
      company: "Creative Studio",
      image: "/placeholder.svg",
      rating: 5,
      category: "entrepreneur",
      testimonial: "The holistic approach to style and mindset coaching helped me launch my business with unprecedented confidence. Preity's guidance was life-changing.",
      results: "Successfully launched her dream business",
      program: "Group Transformation Program"
    },
    {
      id: 3,
      name: "Meera Gupta",
      role: "Life Coach",
      company: "Wellness Center",
      image: "/placeholder.svg",
      rating: 5,
      category: "healer",
      testimonial: "As a healer myself, I appreciated Preity's deep understanding of the mind-body connection. Her approach helped me show up more powerfully for my clients.",
      results: "Doubled her client base in 3 months",
      program: "Healing & Wellness Program"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "Student",
      company: "University College",
      image: "/placeholder.svg",
      rating: 5,
      category: "teen",
      testimonial: "The Teen Empowerment program helped me overcome social anxiety and discover my authentic style. I now feel confident speaking in front of my class.",
      results: "Became class representative and joined debate team",
      program: "Teen Empowerment Program"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      role: "Team Leader",
      company: "Financial Services",
      image: "/placeholder.svg",
      rating: 5,
      category: "corporate",
      testimonial: "Preity's corporate training program revolutionized our team dynamics. Everyone emerged with enhanced confidence and leadership presence.",
      results: "Team productivity increased by 40%",
      program: "Corporate Training Program"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories', icon: Users },
    { id: 'corporate', name: 'Corporate Leaders', icon: Award },
    { id: 'entrepreneur', name: 'Entrepreneurs', icon: Target },
    { id: 'healer', name: 'Healers & Coaches', icon: Star },
    { id: 'teen', name: 'Teen Success', icon: Play }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "25+", label: "Years Experience", icon: Calendar },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Sonali Verma",
      title: "Style & Confidence Transformation",
      thumbnail: "/placeholder.svg",
      duration: "3:45"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      title: "Corporate Leadership Journey",
      thumbnail: "/placeholder.svg",
      duration: "4:20"
    },
    {
      id: 3,
      name: "Nisha Agarwal",
      title: "Healing & Wellness Success",
      thumbnail: "/placeholder.svg",
      duration: "5:15"
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-ivory">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            Success Stories
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Discover how our clients have transformed their lives, careers, and confidence through our comprehensive programs.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blush/20 to-ivory">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-gold to-violet text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentTestimonial(0);
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={20} />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            {filteredTestimonials.length > 0 && (
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-gold fill-current"
                      size={24}
                    />
                  ))}
                </div>
                
                <Quote className="text-gold mx-auto mb-6" size={48} />
                
                <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                  "{filteredTestimonials[currentTestimonial]?.testimonial}"
                </blockquote>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <img
                    src={filteredTestimonials[currentTestimonial]?.image}
                    alt={filteredTestimonials[currentTestimonial]?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gold"
                  />
                  <div className="text-center md:text-left">
                    <div className="font-playfair font-bold text-xl text-deep-charcoal">
                      {filteredTestimonials[currentTestimonial]?.name}
                    </div>
                    <div className="text-gray-600 mb-2">
                      {filteredTestimonials[currentTestimonial]?.role} at {filteredTestimonials[currentTestimonial]?.company}
                    </div>
                    <div className="text-sm text-gold font-medium">
                      Program: {filteredTestimonials[currentTestimonial]?.program}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gold/10 to-violet/10 rounded-2xl p-6 mb-8">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Result Achieved:</div>
                  <div className="text-lg font-semibold text-deep-charcoal">
                    {filteredTestimonials[currentTestimonial]?.results}
                  </div>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-gradient-to-r from-gold to-violet text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentTestimonial
                            ? 'bg-gradient-to-r from-gold to-violet'
                            : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-gradient-to-r from-gold to-violet text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-blush/20 to-ivory">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 gradient-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            Video Success Stories
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="text-gold" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-deep-charcoal mb-2">
                    {video.name}
                  </h3>
                  <p className="text-gray-600">
                    {video.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 gradient-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            More Success Stories
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold mr-4"
                  />
                  <div>
                    <div className="font-playfair font-bold text-deep-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-gold fill-current"
                      size={16}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="bg-gradient-to-r from-gold/10 to-violet/10 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Result:</div>
                  <div className="text-sm font-semibold text-deep-charcoal">
                    {testimonial.results}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gold/10 to-violet/10">
        <motion.div
          className="container mx-auto text-center max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Write Your <span className="gradient-text">Success Story?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join hundreds of successful individuals who have transformed their lives through our programs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <CTAButton size="lg" className="text-xl px-12 py-4">
              Start Your Transformation
            </CTAButton>
            <CTAButton variant="outline" size="lg" className="text-xl px-12 py-4">
              Book Discovery Call
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;

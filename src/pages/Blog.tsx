import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import CTAButton from '../components/CTAButton';
import { Calendar, Clock, ArrowRight, Download, Mail, Tag, Search, Filter } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'style', name: 'Style Tips', count: 8 },
    { id: 'mindset', name: 'Mindset', count: 6 },
    { id: 'confidence', name: 'Confidence', count: 5 },
    { id: 'transformation', name: 'Transformation', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Daily Habits to Build Unshakeable Confidence",
      excerpt: "Discover the simple yet powerful daily practices that can transform your confidence levels and change how you show up in the world.",
      category: "confidence",
      readTime: "7 min",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Psychology of Color in Your Wardrobe",
      excerpt: "Learn how different colors affect your mood, confidence, and how others perceive you. Master the art of color psychology in fashion.",
      category: "style",
      readTime: "5 min",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Overcoming Imposter Syndrome in Leadership",
      excerpt: "Practical strategies to silence your inner critic and step into your power as a confident leader in any situation.",
      category: "mindset",
      readTime: "8 min",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Your Style Evolution: From Copying to Creating",
      excerpt: "Move beyond following trends to developing your unique personal style that authentically represents who you are.",
      category: "style",
      readTime: "6 min",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "The Transformation Mindset: Embracing Change",
      excerpt: "Why transformation begins in the mind and how to cultivate the right mindset for lasting personal change.",
      category: "transformation",
      readTime: "9 min",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Confidence in Public Speaking: A Style Coach's Guide",
      excerpt: "Combine inner confidence with outer presentation to become a compelling and authentic public speaker.",
      category: "confidence",
      readTime: "7 min",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Insights & Inspiration
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Practical wisdom on style, confidence, and transformation to help you 
            become the most authentic version of yourself.
          </motion.p>
        </motion.div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 px-6 bg-gradient-to-r from-gold/10 to-violet/10">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center mx-auto mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Download className="text-white" size={32} />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Free Confidence Guide
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Download my exclusive guide: "5 Daily Habits to Build Unshakeable Confidence" 
              and start your transformation journey today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <CTAButton size="lg">
                Download Free
                <Download size={20} className="ml-2" />
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-gold to-violet text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair font-bold mb-8 gradient-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              Featured Article
            </motion.h2>
            
            <motion.div
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-gold to-violet text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {blogPosts[0].readTime} read
                    </span>
                    <span className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-playfair font-bold text-deep-charcoal mb-4">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <CTAButton variant="outline">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {filteredPosts.slice(selectedCategory === 'all' ? 1 : 0).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-deep-charcoal mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-medium hover:text-violet transition-colors cursor-pointer">
                      Read More
                    </span>
                    <ArrowRight size={16} className="text-gold" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <p className="text-xl text-gray-600">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blush/20 to-ivory">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-violet rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gradient-text">
              Stay Inspired
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly insights on style, confidence, and transformation delivered to your inbox. 
              Plus exclusive content and early access to new programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <CTAButton size="lg">
                Subscribe
                <Mail size={20} className="ml-2" />
              </CTAButton>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;

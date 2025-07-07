
import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = ''
}) => {
  const baseClasses = "font-medium rounded-full transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold to-violet text-white shadow-lg",
    secondary: "bg-white text-deep-charcoal border-2 border-gold",
    outline: "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? "0 15px 35px rgba(212, 175, 55, 0.4)" 
          : "0 10px 25px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;

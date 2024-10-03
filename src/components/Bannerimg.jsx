// BannerImage.js
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import bannerImage from '../../public/ancon.webp'; // Import the image
import "./Bannerimg.scss"; // Import the SCSS file for styling

const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <motion.img 
        src={bannerImage} 
        alt="Educational Consultancy Banner" 
        className="banner-image"
        whileHover={{ 
          scale: 1.1, // Slight zoom on hover
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
        }}
        transition={{ 
          duration: 0.3, // Animation duration
          ease: "easeInOut", // Smooth in-out easing
        }}
      />
    </div>
  );
};

export default BannerImage;

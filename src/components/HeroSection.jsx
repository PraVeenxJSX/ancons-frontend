import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../styles/HeroSection.scss"


const HeroSection = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <motion.section
      className="hero cta-button"
      id="hero home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container hero">
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem' }}>
          MS Artificial Intelligence - in USA
        </h1>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem' }}>
          Processing Charge of Rs.1000 per University. Choice of Top 200 Universities
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
          January, May, Aug 2025 semesters
        </p>
        <button
          onClick={handleRegister}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Register
        </button>
        
      </div>
    </motion.section>
  );
 
};

export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { keyframes } from '@emotion/react';

// Subtle shimmer animation for the button
const shimmerAnimation = keyframes`
  0% { background-position: -100% center; }
  100% { background-position: 100% center; }
`;

const HagridButton = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: '#f5d042',
          color: '#5e0b0b',
          fontFamily: '"Outfit", fantasy',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(245, 208, 66, 0.5)',
          background: 'linear-gradient(45deg, #f5d042, #ffa500)',
          backgroundSize: '200% auto',
          animation: `${shimmerAnimation} 3s linear infinite`,
          '&:hover': {
            background: 'linear-gradient(45deg, #ffa500, #f5d042)',
          },
        }}
      >
        Download My CV
      </Button>
    </motion.div>
  );
};

export default HagridButton;
import { motion } from 'framer-motion';
import { Typography, Box } from '@mui/material';
import { IconCloud } from '../TechStack';
import { keyframes } from '@emotion/react';
import HagridButton from './HagridButton';

const About = () => {
  const skillIcons = [
    "react", "javascript", "nodejs", "html5", "css3",
    "git", "github", "mongodb", "firebase",
    "visualstudiocode", "mui", "redux", "express","java","bootstrap"
  ];

  // Magical floating animation
  const floatingAnimation = keyframes`
    0% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-5px) translateX(2px); }
    50% { transform: translateY(0px) translateX(0px); }
    75% { transform: translateY(5px) translateX(-2px); }
    100% { transform: translateY(0px) translateX(0px); }
  `;

  // Magical shimmer animation
  const shimmerAnimation = keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  `;

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './cv.pdf'; 
    link.download = 'Siphelele_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Box sx={{ 
        backgroundColor: 'rgba(94, 11, 11, 0.1)',
        color: '#f5d042',
        p: 4,
        borderRadius: '12px',
        boxShadow: '0 0 30px rgba(245, 208, 66, 0.2)',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        gap: 4,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 208, 66, 0.05) 0%, rgba(94, 11, 11, 0) 50%)',
          animation: `${shimmerAnimation} 10s linear infinite`,
          backgroundSize: '200% 200%',
          pointerEvents: 'none'
        }
      }}>
        <Box sx={{ 
          flex: 1,
          minWidth: 0,
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            style={{
              animation: `${floatingAnimation} 6s ease-in-out infinite`,
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontFamily: '"Outfit", fantasy',
                letterSpacing: '0.05em',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(245, 208, 66, 0.5)',
                mb: 3,
                background: 'linear-gradient(45deg, #f5d042, #ffa500, #f5d042)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `${shimmerAnimation} 3s linear infinite`,
              }}
            >
              The Wizard Behind The Code
            </Typography>

            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontFamily: '"Outfit", fantasy',
                lineHeight: 1.8,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                animation: `${floatingAnimation} 7s ease-in-out infinite`,
                animationDelay: '0.5s'
              }}
            >
              Greetings! Like a student of Hogwarts mastering their spells, I've devoted myself to the magical arts of web development. Armed with the MERN stack as my primary wand, I transform complex challenges into elegant digital solutions.
            </Typography>

            <Typography 
              variant="body1"
              sx={{ 
                fontFamily: '"Outfit", fantasy',
                lineHeight: 1.8,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                animation: `${floatingAnimation} 8s ease-in-out infinite`,
                animationDelay: '1s'
              }}
            >
              Just as every great wizard has their preferred spells, below you'll find my arsenal of magical tools - each one carefully mastered to create enchanting web experiences that leave users spellbound.
            </Typography>

            
            {/* <HagridButton onClick={handleDownloadCV} /> */}
            
          </motion.div>
          <HagridButton onClick={handleDownloadCV} />
        </Box>

        <Box sx={{ 
          flex: 1,
          minWidth: {
            xs: '100%',
            md: '400px'
          },
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              animation: `${floatingAnimation} 10s ease-in-out infinite`,
            }}
          >
            <IconCloud iconSlugs={skillIcons} />
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default About;
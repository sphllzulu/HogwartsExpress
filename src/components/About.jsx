import { motion } from 'framer-motion';
import { Typography, Box, Paper } from '@mui/material';
import { IconCloud } from '../TechStack';
import { keyframes } from '@emotion/react';
import HagridButton from './HagridButton';
import { useState, useEffect } from 'react';

const About = () => {
  const [newspaperLoaded, setNewspaperLoaded] = useState(false);
  
  // Load the newspaper with a slight delay for effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setNewspaperLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const skillIcons = [
    "react", "javascript", "nodejs", "html5", "css3",
    "git", "github", "mongodb", "firebase",
    "visualstudiocode", "mui", "redux", "express", "java", "bootstrap"
  ];

  // Newspaper unfold animation
  const unfoldNewspaper = keyframes`
    0% { transform: scale(0.1); opacity: 0; }
    50% { transform: scale(1.05); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  `;
  
  // Text appear animation
  const textAppear = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  // Ink spread animation
  const inkSpread = keyframes`
    from { background-position: 0% 0%; }
    to { background-position: 100% 100%; }
  `;

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './Sphesh.pdf'; 
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
      {/* Loading Screen */}
      {!newspaperLoaded ? (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000,
          }}
        >
          <Box 
            sx={{ 
              textAlign: 'center',
              color: '#d4b16a'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: '"Times New Roman", serif',
                animation: `${inkSpread} 2s linear infinite`,
              }}
            >
              The Daily Prophet is printing...
            </Typography>
          </Box>
        </Box>
      ) : (
        <Paper
          elevation={5}
          sx={{
            position: 'relative',
            bgcolor: '#ddd1a7', // Aged newspaper color
            color: '#000',
            p: { xs: 2, md: 4 },
            borderRadius: '2px',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3CfeColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
            animation: `${unfoldNewspaper} 1.5s ease-out forwards`,
            overflow: 'hidden',
            mb: 4,
          }}
        >
          {/* Newspaper Header */}
          <Box sx={{ 
            borderBottom: '3px double #000',
            mb: 3,
            pb: 1,
            textAlign: 'center',
            animation: `${textAppear} 0.8s ease-out forwards`,
          }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontFamily: '"UnifrakturMaguntia", "Times New Roman", serif',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              The Daily Prophet
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{ 
                fontFamily: '"Times New Roman", serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
              }}
            >
              ESTABLISHED 1743 • THE WIZARDING WORLD'S BEGUILING NEWS • {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
            </Typography>
          </Box>

          {/* Main Article */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 3,
            animation: `${textAppear} 1s ease-out 0.3s forwards`,
            opacity: 0,
          }}>
            <Box sx={{ 
              flex: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
              {/* Headline */}
              <Typography 
                variant="h3" 
                sx={{ 
                  fontFamily: '"Times New Roman", serif',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  textTransform: 'uppercase',
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                THE WIZARD BEHIND THE CODE
              </Typography>
              
              {/* Main text in columns */}
              <Box sx={{ 
                columnCount: { xs: 1, sm: 2 },
                columnGap: '2rem',
                columnRule: '1px solid rgba(0, 0, 0, 0.2)',
              }}>
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    fontFamily: '"Times New Roman", serif',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                    mb: 2,
                    textIndent: '1.5rem',
                    '&::first-letter': {
                      fontSize: '2.5rem',
                      float: 'left',
                      lineHeight: '1',
                      margin: '0 0.2rem 0 0',
                      fontWeight: 'bold',
                    }
                  }}
                >
                  Greetings! Like a student of Hogwarts mastering their spells, I've devoted myself to the magical arts of web/mobile software development. Armed with the MERN stack as my primary wand, I transform complex challenges into elegant digital solutions.
                </Typography>

                <Typography 
                  variant="body1"
                  paragraph
                  sx={{ 
                    fontFamily: '"Times New Roman", serif',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                    mb: 2,
                    textIndent: '1.5rem',
                  }}
                >
                  Just as every great wizard has their preferred spells, below you'll find my arsenal of magical tools - each one carefully mastered to create enchanting web experiences that leave users spellbound.
                </Typography>

                <Box sx={{ 
                  textAlign: 'center', 
                  mt: 3, 
                  mb: 2, 
                  border: '1px solid #000',
                  p: 2,
                  bgcolor: 'rgba(0,0,0,0.03)',
                  breakInside: 'avoid',
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontFamily: '"Times New Roman", serif',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    I solemnly swear that I am up to good code
                  </Typography>
                  <HagridButton onClick={handleDownloadCV} />
                </Box>
              </Box>
            </Box>

            {/* Skills section - styled as a newspaper sidebar/advertisement */}
            <Box 
              sx={{ 
                flex: 1,
                minWidth: { xs: '100%', md: '250px' },
                border: '1px solid #000',
                p: 2,
                bgcolor: 'rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: `${textAppear} 1.2s ease-out 0.6s forwards`,
                opacity: 0,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: '"Times New Roman", serif',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  borderBottom: '2px solid #000',
                  width: '100%',
                  pb: 1,
                  mb: 2,
                }}
              >
                MAGICAL SKILLS
              </Typography>
              
              <Box 
                sx={{ 
                  height: 300,
                  width: '100%',
                  position: 'relative',
                  mb: 2,
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IconCloud iconSlugs={skillIcons} />
                </Box>
              </Box>
              
              <Typography 
                variant="body2"
                sx={{ 
                  fontFamily: '"Times New Roman", serif',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                }}
              >
                *These magical skills have been known to move when observed closely
              </Typography>
            </Box>
          </Box>
          
          {/* Footer */}
          <Box sx={{ 
            borderTop: '1px solid #000',
            mt: 3,
            pt: 1,
            textAlign: 'center',
            fontSize: '0.8rem',
            fontFamily: '"Times New Roman", serif',
            animation: `${textAppear} 1s ease-out 1s forwards`,
            opacity: 0,
          }}>
            The Daily Prophet © {new Date().getFullYear()} • All Rights Reserved • For inquiries about this developer's services, please contact via owl or modern communication methods
          </Box>
        </Paper>
      )}
    </motion.div>
  );
};

export default About;
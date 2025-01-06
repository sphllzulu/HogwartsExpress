import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

// Floating animation for the MenuBookIcon
const floatingAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Header = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: 'rgba(245, 208, 66, 0.05)',
      boxShadow: '0 0 10px #f5d042',
    }}
  >
    <Toolbar>
      {/* MenuBookIcon with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            '&:hover': {
              transform: 'rotate(20deg)',
              transition: 'transform 0.3s',
            },
            color: '#f5d042',
            animation: `${floatingAnimation} 4s ease-in-out infinite`,
          }}
        >
          <MenuBookIcon
            sx={{
              fontSize: '2rem',
              filter: 'drop-shadow(0 0 8px #f5d042)',
            }}
          />
        </IconButton>
      </motion.div>

      {/* Name (completely still) */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: '#f5d042',
          textShadow: '0 0 8px #f5d042, 0 0 20px #f5d042',
          letterSpacing: '2px',
          marginLeft: '1rem',
          flexGrow: 1, // Ensures the name takes up remaining space
        }}
      >
        Siphelele Zulu
      </Typography>

      {/* Professional Picture on the Right */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            animation: `${floatingAnimation} 4s ease-in-out infinite`,
          }}
        >
          <Box
            component="img"
            src="./ME.jpg" 
            alt="Siphelele Zulu"
            sx={{
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              boxShadow: '0 0 10px rgba(245, 208, 66, 0.5)',
              border: '2px solid #f5d042',
            }}
          />
        </motion.div>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
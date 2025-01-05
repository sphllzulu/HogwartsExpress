import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { motion } from 'framer-motion';
import './Header.css'

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#5e0b0b', boxShadow: '0 0 10px #f5d042' }}>
    <Toolbar>
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
          }}
        >
          <MenuBookIcon sx={{ fontSize: '2rem', filter: 'drop-shadow(0 0 8px #f5d042)' }} />
        </IconButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ marginLeft: '1rem' }}
      >
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            fontFamily: 'outfit',
            color: '#f5d042',
            textShadow: '0 0 8px #f5d042, 0 0 20px #f5d042',
            letterSpacing: '2px',
          }}

          
        >
          Siphelele Zulu
        </Typography>
      </motion.div>
    </Toolbar>
  </AppBar>
);

export default Header;


import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Shimmer animation for magical effects
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sphllzulu@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+27746992821";
  };

  return (
    <Box sx={{ textAlign: 'center', p: 4, mt: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: '"Outfit", fantasy',
            background: "linear-gradient(45deg, #f5d042, #ffa500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `${shimmerAnimation} 3s linear infinite`,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontFamily: '"Outfit", fantasy', color: "#f5d042" }}>
          Send an owl or cast a Patronus to get in touch!
        </Typography>

        {/* Email Button */}
        <Button
          variant="contained"
          onClick={handleEmailClick}
          sx={{
            backgroundColor: "#f5d042",
            color: "#5e0b0b",
            fontFamily: '"Outfit", fantasy',
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(245, 208, 66, 0.5)",
            background: "linear-gradient(45deg, #f5d042, #ffa500)",
            backgroundSize: "200% auto",
            animation: `${shimmerAnimation} 3s linear infinite`,
            "&:hover": {
              background: "linear-gradient(45deg, #ffa500, #f5d042)",
            },
            mb: 2,
            mr: 2,
          }}
        >
          ✉️ Send an Owl (Email)
        </Button>

        {/* Call Button */}
        <Button
          variant="contained"
          onClick={handleCallClick}
          sx={{
            backgroundColor: "#f5d042",
            color: "#5e0b0b",
            fontFamily: '"Outfit", fantasy',
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(245, 208, 66, 0.5)",
            background: "linear-gradient(45deg, #f5d042, #ffa500)",
            backgroundSize: "200% auto",
            animation: `${shimmerAnimation} 3s linear infinite`,
            "&:hover": {
              background: "linear-gradient(45deg, #ffa500, #f5d042)",
            },
            mb: 2,
          }}
        >
          📞 Cast a Patronus (Call)
        </Button>

        {/* Optional: Social Media Links */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" sx={{ mb: 2, fontFamily: '"Outfit", fantasy', color: "#f5d042" }}>
            Or find me on:
          </Typography>
          <Button
            variant="outlined"
            href="www.linkedin.com/in/siphelele-zulu-6a6a3916a"
            target="_blank"
            sx={{
              color: "#f5d042",
              borderColor: "#f5d042",
              fontFamily: '"Outfit", fantasy',
              "&:hover": {
                backgroundColor: "rgba(245, 208, 66, 0.1)",
                borderColor: "#ffa500",
              },
              mr: 2,
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/sphllzulu"
            target="_blank"
            sx={{
              color: "#f5d042",
              borderColor: "#f5d042",
              fontFamily: '"Outfit", fantasy',
              "&:hover": {
                backgroundColor: "rgba(245, 208, 66, 0.1)",
                borderColor: "#ffa500",
              },
            }}
          >
            GitHub
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
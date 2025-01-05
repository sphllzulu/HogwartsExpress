import React from "react";
import { Typography, Box, Paper, List, ListItem, ListItemText } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for magical effects
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const PostProgramGoals = () => {
  const shortTermGoals = [
    "Secure a job in web development.",
    "Build 2-3 more portfolio projects.",
  ];

  const longTermGoals = [
    "Become a full-stack developer.",
    "Contribute to open-source projects.",
  ];

  return (
    <Box sx={{ mt: 8, mb: 8, mx: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Outfit", fantasy',
          textAlign: "center",
          background: "linear-gradient(45deg, #f5d042, #ffa500)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 6,
          animation: `${shimmerAnimation} 3s linear infinite`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Post-Program Goals
      </Typography>

      {/* Short-Term Goals */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 6,
          backgroundColor: "rgba(245, 208, 66, 0.1)",
          borderRadius: "12px",
          border: "1px solid rgba(245, 208, 66, 0.3)",
          boxShadow: "0 0 20px rgba(245, 208, 66, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Outfit", fantasy',
            mb: 3,
            color: "#f5d042",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          Short-Term Goals
        </Typography>
        <List>
          {shortTermGoals.map((goal, index) => (
            <ListItem key={index} sx={{ pl: 0 }}>
              <ListItemText
                primary={`✨ ${goal}`}
                primaryTypographyProps={{
                  fontFamily: '"Outfit", fantasy',
                  color: "#f5d042",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Long-Term Goals */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "rgba(245, 208, 66, 0.1)",
          borderRadius: "12px",
          border: "1px solid rgba(245, 208, 66, 0.3)",
          boxShadow: "0 0 20px rgba(245, 208, 66, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Outfit", fantasy',
            mb: 3,
            color: "#f5d042",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          Long-Term Goals
        </Typography>
        <List>
          {longTermGoals.map((goal, index) => (
            <ListItem key={index} sx={{ pl: 0 }}>
              <ListItemText
                primary={`✨ ${goal}`}
                primaryTypographyProps={{
                  fontFamily: '"Outfit", fantasy',
                  color: "#f5d042",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default PostProgramGoals;
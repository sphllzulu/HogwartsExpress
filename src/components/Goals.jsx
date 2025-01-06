import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for the title
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const GoalCard = ({ goal, color }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      textAlign: "center",
      backgroundColor: "rgba(245, 208, 66, 0.1)",
      borderRadius: "12px",
      border: `1px solid ${color}`,
      boxShadow: `0 0 10px ${color}`,
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontFamily: '"Outfit", fantasy',
        color: "#f5d042",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      ✨ {goal}
    </Typography>
  </Paper>
);

const PostProgramGoals = () => {
  const shortTermGoals = [
    "Secure a job in web development.",
    "Build more portfolio projects.",
    "Complete an advanced React&React native course.",
    "Contribute to at least 2 open-source projects.",
    "Attend tech meetups or conferences.",
    "Participate in hackathons"
  ];

  const longTermGoals = [
    "Become a full-stack developer.",
    "Contribute to open-source projects regularly.",
    "Mentor aspiring developers.",
    "Go into freelancing.",
    "Launch a tech startup or side project.",
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 8, p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Outfit", fantasy',
          textAlign: "center",
          mb: 6,
          background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${shimmerAnimation} 3s linear infinite`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Post-Program Goals
      </Typography>

      {/* Short-Term Goals */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          mb: 4,
          background: "linear-gradient(45deg, #740001, #1A472A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Short-Term Goals
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {shortTermGoals.map((goal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GoalCard goal={goal} color="#740001" /> {/* Gryffindor Red */}
          </Grid>
        ))}
      </Grid>

      {/* Long-Term Goals */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          mb: 4,
          background: "linear-gradient(45deg, #0E1A40, #FFDB00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Long-Term Goals
      </Typography>
      <Grid container spacing={3}>
        {longTermGoals.map((goal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GoalCard goal={goal} color="#0E1A40" /> {/* Ravenclaw Blue */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostProgramGoals;
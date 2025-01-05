import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for magical effects
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const FeedbackAndReflections = () => {
  const facilitatorFeedback = [
    "Siphelele has shown exceptional growth in understanding React and Node.js. Her ability to solve complex problems is commendable.",
    "A very dedicated learner who consistently delivers high-quality projects. Her attention to detail is impressive.",
    "Siphelele has a strong grasp of full-stack development concepts and is always willing to help peers.",
  ];

  const selfReflection = {
    growth: "Throughout the program, I have significantly improved my skills in React, Node.js, and database management. I’ve also learned how to work collaboratively in a team.",
    strengths: "My strengths include problem-solving, attention to detail, and the ability to learn new technologies quickly.",
    improvements: "I need to improve my time management skills and gain more experience in deploying scalable applications.",
  };

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
        Feedback and Reflections
      </Typography>

      {/* Facilitator Feedback */}
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
          Facilitator Feedback
        </Typography>
        {facilitatorFeedback.map((feedback, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Outfit", fantasy',
              color: "#f5d042",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            ✨ {feedback}
          </Typography>
        ))}
      </Paper>

      {/* Self-Reflection */}
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
          Self-Reflection
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontFamily: '"Outfit", fantasy',
            color: "#f5d042",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <strong>Growth:</strong> {selfReflection.growth}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontFamily: '"Outfit", fantasy',
            color: "#f5d042",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <strong>Strengths:</strong> {selfReflection.strengths}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Outfit", fantasy',
            color: "#f5d042",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <strong>Areas for Improvement:</strong> {selfReflection.improvements}
        </Typography>
      </Paper>
    </Box>
  );
};

export default FeedbackAndReflections;
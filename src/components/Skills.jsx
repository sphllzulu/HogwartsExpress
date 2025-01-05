import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for the title
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const SkillBar = ({ skill, level, color }) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      variant="h6"
      sx={{
        fontFamily: '"Outfit", fantasy',
        color: "#f5d042", // Golden text color
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      {skill}
    </Typography>
    <LinearProgress
      variant="determinate"
      value={level}
      sx={{
        height: 10,
        borderRadius: 5,
        backgroundColor: "rgba(245, 208, 66, 0.2)", // Light gold background
        "& .MuiLinearProgress-bar": {
          backgroundColor: color, // Dynamic color based on Hogwarts house
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
        },
      }}
    />
  </Box>
);

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 80, color: "#740001" }, // Gryffindor Red
    { name: "React", level: 70, color: "#1A472A" }, // Slytherin Green
    { name: "React Native", level: 70, color: "#0E1A40" }, // Ravenclaw Blue
    { name: "Node.js", level: 60, color: "#FFDB00" }, // Hufflepuff Yellow
    { name: "MongoDB", level: 60, color: "#740001" }, // Gryffindor Red
    { name: "HTML & CSS", level: 90, color: "#1A472A" }, // Slytherin Green
  ];

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Outfit", fantasy',
          textAlign: "center",
          mb: 3,
          background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${shimmerAnimation} 3s linear infinite`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Skills Matrix
      </Typography>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skill={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </Box>
  );
};

export default Skills;

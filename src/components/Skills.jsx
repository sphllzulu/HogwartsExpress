import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

const SkillBar = ({ skill, level }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6">{skill}</Typography>
    <LinearProgress variant="determinate" value={level} />
  </Box>
);

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "ReactNative", level: 70 },
    { name: "Node.js", level: 60 },
    { name: "MongoDB", level: 60 },
    { name: "MongoDB", level: 60 },
  ];

  return (
    <Box sx={{ maxWidth: 400, mx: "auto" }}>
        <Typography>Skills Matrix</Typography>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.name} level={skill.level} />
      ))}
    </Box>
  );
};

export default Skills;

// import React from "react";
// import { LinearProgress, Typography, Box } from "@mui/material";
// import { keyframes } from "@emotion/react";

// // Shimmer animation for the title
// const shimmerAnimation = keyframes`
//   0% { background-position: -200% center; }
//   100% { background-position: 200% center; }
// `;

// const SkillBar = ({ skill, level, color }) => (
//   <Box sx={{ mb: 2 }}>
//     <Typography
//       variant="h6"
//       sx={{
//         fontFamily: '"Outfit", fantasy',
//         color: "#f5d042", // Golden text color
//         textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//       }}
//     >
//       {skill}
//     </Typography>
//     <LinearProgress
//       variant="determinate"
//       value={level}
//       sx={{
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: "rgba(245, 208, 66, 0.2)", // Light gold background
//         "& .MuiLinearProgress-bar": {
//           backgroundColor: color, // Dynamic color based on Hogwarts house
//           boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
//         },
//       }}
//     />
//   </Box>
// );

// const Skills = () => {
//   const skills = [
//     { name: "JavaScript", level: 80, color: "#740001" }, // Gryffindor Red
//     { name: "React", level: 70, color: "#1A472A" }, // Slytherin Green
//     { name: "React Native", level: 70, color: "#0E1A40" }, // Ravenclaw Blue
//     { name: "Node.js", level: 60, color: "#FFDB00" }, // Hufflepuff Yellow
//     { name: "MongoDB", level: 60, color: "#740001" }, // Gryffindor Red
//     { name: "HTML & CSS", level: 90, color: "#1A472A" }, // Slytherin Green
//   ];

//   return (
//     <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           fontFamily: '"Outfit", fantasy',
//           textAlign: "center",
//           mb: 3,
//           background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
//           backgroundSize: "200% auto",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           animation: `${shimmerAnimation} 3s linear infinite`,
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         Skills Matrix
//       </Typography>
//       {skills.map((skill, index) => (
//         <SkillBar
//           key={index}
//           skill={skill.name}
//           level={skill.level}
//           color={skill.color}
//         />
//       ))}
//     </Box>
//   );
// };

// export default Skills;
import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for the title
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const SkillCard = ({ skill, level, color }) => (
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
        mb: 1,
      }}
    >
      {skill}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontFamily: '"Outfit", fantasy',
        color: color,
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      {level}
    </Typography>
  </Paper>
);

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "JavaScript", level: "Intermediate", color: "#740001" }, // Gryffindor Red
      { name: "React", level: "Beginner", color: "#1A472A" }, // Slytherin Green
      { name: "HTML5", level: "Intermediate", color: "#0E1A40" }, // Ravenclaw Blue
      { name: "CSS3", level: "Intermediate", color: "#FFDB00" }, // Hufflepuff Yellow
      { name: "Material-UI (MUI)", level: "Beginner", color: "#740001" }, // Gryffindor Red
      { name: "Bootstrap", level: "Intermediate", color: "#1A472A" }, // Slytherin Green
    ],
    Backend: [
      { name: "Node.js", level: "Beginner", color: "#0E1A40" }, // Ravenclaw Blue
      { name: "Express", level: "Beginner", color: "#FFDB00" }, // Hufflepuff Yellow
      { name: "MongoDB", level: "Beginner", color: "#740001" }, // Gryffindor Red
      { name: "Firebase", level: "Beginner", color: "#1A472A" }, // Slytherin Green
    ],
    "Tools & Other": [
      { name: "Git", level: "Intermediate", color: "#0E1A40" }, // Ravenclaw Blue
      { name: "GitHub", level: "Intermediate", color: "#FFDB00" }, // Hufflepuff Yellow
      { name: "Visual Studio Code", level: "Intermediate", color: "#740001" }, // Gryffindor Red
      { name: "Redux", level: "Beginner", color: "#1A472A" }, // Slytherin Green
      { name: "Java", level: "Beginner", color: "#0E1A40" }, // Ravenclaw Blue
    ],
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Outfit", fantasy',
          textAlign: "center",
          mb: 4,
          background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${shimmerAnimation} 3s linear infinite`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        The Magical Toolkit
      </Typography>

      {/* Frontend Skills */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          mb: 2,
          background: "linear-gradient(45deg, #740001, #1A472A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Frontend
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {skills.Frontend.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
          </Grid>
        ))}
      </Grid>

      {/* Backend Skills */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          mb: 2,
          background: "linear-gradient(45deg, #0E1A40, #FFDB00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Backend
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {skills.Backend.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
          </Grid>
        ))}
      </Grid>

      {/* Tools & Other Skills */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          mb: 2,
          background: "linear-gradient(45deg, #740001, #1A472A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Tools & Other
      </Typography>
      <Grid container spacing={3}>
        {skills["Tools & Other"].map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
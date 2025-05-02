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



// import React from "react";
// import { Typography, Box, Grid, Paper } from "@mui/material";
// import { keyframes } from "@emotion/react";

// // Shimmer animation for the title
// const shimmerAnimation = keyframes`
//   0% { background-position: -200% center; }
//   100% { background-position: 200% center; }
// `;

// const SkillCard = ({ skill, level, color }) => (
//   <Paper
//     elevation={3}
//     sx={{
//       p: 2,
//       textAlign: "center",
//       backgroundColor: "rgba(245, 208, 66, 0.1)",
//       borderRadius: "12px",
//       border: `1px solid ${color}`,
//       boxShadow: `0 0 10px ${color}`,
//     }}
//   >
//     <Typography
//       variant="h6"
//       sx={{
//         fontFamily: '"Outfit", fantasy',
//         color: "#f5d042",
//         textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//         mb: 1,
//       }}
//     >
//       {skill}
//     </Typography>
//     <Typography
//       variant="body2"
//       sx={{
//         fontFamily: '"Outfit", fantasy',
//         color: color,
//         textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//       }}
//     >
//       {level}
//     </Typography>
//   </Paper>
// );

// const Skills = () => {
//   const skills = {
//     Frontend: [
//       { name: "JavaScript", level: "Intermediate", color: "#740001" }, // Gryffindor Red
//       { name: "React", level: "Beginner", color: "#1A472A" }, // Slytherin Green
//       { name: "HTML5", level: "Intermediate", color: "#0E1A40" }, // Ravenclaw Blue
//       { name: "CSS3", level: "Intermediate", color: "#FFDB00" }, // Hufflepuff Yellow
//       { name: "Material-UI (MUI)", level: "Beginner", color: "#740001" }, // Gryffindor Red
//       { name: "Bootstrap", level: "Intermediate", color: "#1A472A" }, // Slytherin Green
//     ],
//     Backend: [
//       { name: "Node.js", level: "Beginner", color: "#0E1A40" }, // Ravenclaw Blue
//       { name: "Express", level: "Beginner", color: "#FFDB00" }, // Hufflepuff Yellow
//       { name: "MongoDB", level: "Beginner", color: "#740001" }, // Gryffindor Red
//       { name: "Firebase", level: "Beginner", color: "#1A472A" }, // Slytherin Green
//     ],
//     "Tools & Other": [
//       { name: "Git", level: "Intermediate", color: "#0E1A40" }, // Ravenclaw Blue
//       { name: "GitHub", level: "Intermediate", color: "#FFDB00" }, // Hufflepuff Yellow
//       { name: "Visual Studio Code", level: "Intermediate", color: "#740001" }, // Gryffindor Red
//       { name: "Redux", level: "Beginner", color: "#1A472A" }, // Slytherin Green
//       { name: "Java", level: "Beginner", color: "#0E1A40" }, // Ravenclaw Blue
//     ],
//   };

//   return (
//     <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, p: 3 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           fontFamily: '"Outfit", fantasy',
//           textAlign: "center",
//           mb: 4,
//           background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
//           backgroundSize: "200% auto",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           animation: `${shimmerAnimation} 3s linear infinite`,
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         The Magical Toolkit
//       </Typography>

//       {/* Frontend Skills */}
//       <Typography
//         variant="h5"
//         sx={{
//           fontFamily: '"Outfit", fantasy',
//           color: "#f5d042",
//           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//           mb: 2,
//           background: "linear-gradient(45deg, #740001, #1A472A)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Frontend
//       </Typography>
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {skills.Frontend.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Backend Skills */}
//       <Typography
//         variant="h5"
//         sx={{
//           fontFamily: '"Outfit", fantasy',
//           color: "#f5d042",
//           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//           mb: 2,
//           background: "linear-gradient(45deg, #0E1A40, #FFDB00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Backend
//       </Typography>
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {skills.Backend.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Tools & Other Skills */}
//       <Typography
//         variant="h5"
//         sx={{
//           fontFamily: '"Outfit", fantasy',
//           color: "#f5d042",
//           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
//           mb: 2,
//           background: "linear-gradient(45deg, #740001, #1A472A)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Tools & Other
//       </Typography>
//       <Grid container spacing={3}>
//         {skills["Tools & Other"].map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <SkillCard skill={skill.name} level={skill.level} color={skill.color} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import { Typography, Box, Grid, Paper, Tooltip, Zoom, Modal, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";

// Shimmer animation for the title
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Glow animation for spell cards
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(245, 208, 66, 0.5); }
  50% { box-shadow: 0 0 20px rgba(245, 208, 66, 0.8); }
  100% { box-shadow: 0 0 10px rgba(245, 208, 66, 0.5); }
`;

// Spell casting animation
const castAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

// Wand movement animation for spell cards
const wandAnimation = keyframes`
  0% { transform: rotate(-5deg) translateY(0); }
  25% { transform: rotate(10deg) translateY(-5px); }
  50% { transform: rotate(-5deg) translateY(0); }
  75% { transform: rotate(10deg) translateY(-5px); }
  100% { transform: rotate(-5deg) translateY(0); }
`;

const SpellCard = ({ spell, color, skills }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <Tooltip
        title={
          <Box sx={{ p: 1 }}>
            <Typography variant="subtitle2" sx={{ fontFamily: '"Outfit", fantasy', color: "#fff" }}>
              {spell.description}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: '"Outfit", fantasy', color: "#f5d042", fontSize: "0.8rem" }}>
              Click to cast spell
            </Typography>
          </Box>
        }
        arrow
        TransitionComponent={Zoom}
        placement="top"
        disableHoverListener={isMobile}
        disableTouchListener={false}
      >
        <Paper
          elevation={3}
          onClick={handleOpen}
          sx={{
            p: { xs: 2, sm: 3 },
            height: { xs: "auto", sm: "180px", md: "200px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "12px",
            border: `1px solid ${color}`,
            boxShadow: `0 0 10px ${color}`,
            cursor: "pointer",
            transition: "all 0.3s",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              animation: `${glowAnimation} 1.5s infinite`,
              transform: "translateY(-5px)",
            },
            "&:before": {
              content: '""',
              position: "absolute",
              width: "30px",
              height: "150%",
              background: "rgba(255, 255, 255, 0.2)",
              transform: "rotate(30deg)",
              top: "-25%",
              left: "-100px",
              transition: "0.6s",
            },
            "&:hover:before": {
              left: "120%",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Outfit", fantasy',
              color: "#f5d042",
              textShadow: `0 0 10px ${color}`,
              mb: 1,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            {spell.name}()
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <Box
              sx={{
                width: { xs: "20px", sm: "30px" },
                height: "4px",
                backgroundColor: color,
                borderRadius: "2px",
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Outfit", fantasy',
              color: "#fff",
              opacity: 0.9,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              px: { xs: 1, sm: 2 },
            }}
          >
            {spell.shortDescription}
          </Typography>
        </Paper>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="spell-modal-title"
        aria-describedby="spell-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "80%", md: "70%" },
            maxWidth: "800px",
            maxHeight: { xs: "90vh", sm: "80vh" },
            overflowY: "auto",
            bgcolor: "rgba(0, 0, 0, 0.9)",
            border: `2px solid ${color}`,
            boxShadow: `0 0 20px ${color}`,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: "15px",
            animation: `${castAnimation} 0.5s ease-out`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: 2, sm: 3 },
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: { sm: "30px", md: "40px" },
                height: { sm: "30px", md: "40px" },
                mr: 2,
                backgroundImage: "url('/images/wand.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                animation: `${wandAnimation} 3s infinite`,
                transform: "rotate(-5deg)",
                transformOrigin: "bottom right",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Typography
              id="spell-modal-title"
              variant="h4"
              component="h2"
              sx={{
                fontFamily: '"Outfit", fantasy',
                background: `linear-gradient(45deg, ${color}, #f5d042)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: `${shimmerAnimation} 3s linear infinite`,
                textShadow: `0 0 5px ${color}`,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
              }}
            >
              {spell.name}()
            </Typography>
          </Box>
          
          <Typography
            id="spell-modal-description"
            sx={{
              mt: { xs: 1, sm: 2 },
              fontFamily: '"Outfit", fantasy',
              color: "#fff",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.6,
              mb: { xs: 2, sm: 3 },
            }}
          >
            {spell.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Outfit", fantasy',
              color: "#f5d042",
              mb: { xs: 1, sm: 2 },
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            Skills Mastered:
          </Typography>

          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: { xs: 1.5, sm: 2 },
                    textAlign: "center",
                    backgroundColor: "rgba(245, 208, 66, 0.1)",
                    borderRadius: "8px",
                    border: `1px solid ${skill.color}`,
                    boxShadow: `0 0 5px ${skill.color}`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: '"Outfit", fantasy',
                      color: "#f5d042",
                      mb: 1,
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Outfit", fantasy',
                      color: skill.color,
                      mb: 1,
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    {skill.level}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Outfit", fantasy',
                      color: "#f5d042",
                      fontSize: { xs: "0.75rem", sm: "0.8rem" },
                      opacity: 0.8,
                      mt: "auto",
                    }}
                  >
                    {skill.useCase}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Outfit", fantasy',
              color: "#f5d042",
              mt: 3,
              textAlign: "center",
              fontStyle: "italic",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              p: { xs: 1, sm: 2 },
              border: `1px dashed ${color}`,
              borderRadius: "8px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            {spell.example}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Define your skills organized by spell categories
  const skills = {
    Frontend: [
      {
        name: "JavaScript",
        level: "Intermediate",
        color: "#B22222", // Gryffindor Red
        useCase: "Used in the UI Mimic Challenge to create interactive and dynamic web pages.",
      },
      {
        name: "React",
        level: "Beginner",
        color: "#006400", // Slytherin Green
        useCase: "Used in the Employee Registration App and To-Do List Application to build reusable UI components.",
      },
      {
        name: "HTML5",
        level: "Intermediate",
        color: "#0E1A40", // Ravenclaw Blue
        useCase: "Used in the UI Mimic Challenge to structure content and create semantic web pages.",
      },
      {
        name: "CSS3",
        level: "Intermediate",
        color: "#FFDB00", // Hufflepuff Yellow
        useCase: "Used in the UI Mimic Challenge and Employee Registration App for styling and responsive design.",
      },
      {
        name: "Material-UI (MUI)",
        level: "Beginner",
        color: "#B22222", // Gryffindor Red
        useCase: "Used in the To-Do List Application and Weather App for pre-designed, customizable components.",
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        color: "#006400", // Slytherin Green
        useCase: "Used in the Employee Registration App for quickly building responsive layouts.",
      },
    ],
    JavaScript: [
      {
        name: "JavaScript",
        level: "Intermediate",
        color: "#B22222", // Gryffindor Red
        useCase: "Used in the UI Mimic Challenge to create interactive and dynamic web pages.",
      },
      {
        name: "ES6+",
        level: "Intermediate",
        color: "#0E1A40", // Ravenclaw Blue
        useCase: "Used modern JavaScript features like arrow functions, destructuring, and async/await.",
      },
      {
        name: "DOM Manipulation",
        level: "Intermediate",
        color: "#FFDB00", // Hufflepuff Yellow
        useCase: "Created interactive web pages by manipulating the Document Object Model.",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        level: "Beginner",
        color: "#0E1A40", // Ravenclaw Blue
        useCase: "Used in the Basic Server and Shopping List File Manager projects to handle server-side logic.",
      },
      {
        name: "Express",
        level: "Beginner",
        color: "#FFDB00", // Hufflepuff Yellow
        useCase: "Used in the Recipe API and Employee Registration with Firebase to create RESTful APIs.",
      },
      {
        name: "MongoDB",
        level: "Beginner",
        color: "#B22222", // Gryffindor Red
        useCase: "Used in the Recipe API and Employee Registration with Firebase for NoSQL database management.",
      },
      {
        name: "Firebase",
        level: "Beginner",
        color: "#006400", // Slytherin Green
        useCase: "Used in the Employee Registration App and Hotel App for real-time database and authentication.",
      },
    ],
    Tools: [
      {
        name: "Git",
        level: "Intermediate",
        color: "#0E1A40", // Ravenclaw Blue
        useCase: "Used across all projects for version control and collaborative development.",
      },
      {
        name: "GitHub",
        level: "Intermediate",
        color: "#FFDB00", // Hufflepuff Yellow
        useCase: "Used to host and share code repositories for all projects.",
      },
      {
        name: "Visual Studio Code",
        level: "Intermediate",
        color: "#B22222", // Gryffindor Red
        useCase: "Used as the primary code editor for all development projects.",
      },
      {
        name: "Redux",
        level: "Beginner",
        color: "#006400", // Slytherin Green
        useCase: "Used in the Shopping List App for state management in React applications.",
      },
      {
        name: "Java",
        level: "Beginner",
        color: "#0E1A40", // Ravenclaw Blue
        useCase: "Java was my introduction to programming, where I learned foundational concepts and achieved the OCA certification",
      },
    ],
  };

  // Define your spells
  const spells = [
    {
      name: "Accio",
      category: "Frontend",
      color: "#740001", // Gryffindor color
      shortDescription: "Summon UI elements with precision",
      description: "The Summoning Charm that brings frontend elements to life. Master this spell to create beautiful, responsive interfaces that enchant users.",
      example: "const element = Accio(<Component />); // Summons a React component to the DOM",
    },
    {
      name: "Lumos",
      category: "JavaScript",
      color: "#ffc500", // Bright yellow for light spell
      shortDescription: "Illuminate the darkness with JavaScript",
      description: "A fundamental spell that brings light to your applications. With Lumos, you can manipulate the DOM, create interactive features, and bring your websites to life.",
      example: "Lumos.reveal('#element'); // Illuminates and reveals hidden elements",
    },
    {
      name: "Protego",
      category: "Backend",
      color: "#0E1A40", // Ravenclaw blue
      shortDescription: "Shield your data with powerful backend spells",
      description: "A protective charm that secures your application's data and logic. With Protego, you can create robust APIs, manage databases, and ensure your application remains secure.",
      example: "await Protego.authenticate(user); // Protects routes with authentication",
    },
    {
      name: "Wingardium Leviosa",
      category: "Tools",
      color: "#1A472A", // Slytherin green
      shortDescription: "Elevate your development with essential tools",
      description: "The levitation charm that helps you rise above challenges with powerful development tools. Master this spell to streamline your workflow and collaborate effectively.",
      example: "WingardiumLeviosa.commit('feat: add new feature'); // Lifts your code to the repository",
    },
  ];

  // Magical background with stars
  const starAnimation = keyframes`
    0% { opacity: 0.1; }
    50% { opacity: 0.5; }
    100% { opacity: 0.1; }
  `;

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        mt: { xs: 2, sm: 3, md: 4 },
        p: { xs: 2, sm: 3 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 5px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0, 25px 25px",
          animation: `${starAnimation} 4s infinite`,
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Outfit", fantasy',
          textAlign: "center",
          mb: { xs: 3, sm: 4, md: 5 },
          background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${shimmerAnimation} 3s linear infinite`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        The Magical Toolkit
      </Typography>

      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Outfit", fantasy',
            color: "#f5d042",
            textAlign: "center",
            mb: { xs: 2, sm: 3, md: 4 },
            opacity: 0.8,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          {isMobile ? "Tap a spell to reveal its magic" : "Select a spell to reveal its magic"}
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {spells.map((spell, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SpellCard 
                spell={spell} 
                color={spell.color} 
                skills={skills[spell.category]} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontFamily: '"Outfit", fantasy',
          color: "#f5d042",
          textAlign: "center",
          mt: { xs: 3, sm: 4, md: 5 },
          opacity: 0.7,
          fontStyle: "italic",
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
        }}
      >
        "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." — Albus Dumbledore
      </Typography>
    </Box>
  );
};

export default Skills;
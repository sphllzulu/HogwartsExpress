import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@emotion/react";
import "./SpellBook.css";

const projects = {
  React: [
    {
      name: "UI Mimic challenge",
      description: "We were to mimic the design of an image as closely as possible using only react and css",
      techStack: ["React", "CSS"],
      features: ["Static Content", "Responsiveness"],
      demo: "https://1st-ui-challenge.vercel.app/",
      github:"https://github.com/sphllzulu/1stUIChallenge",
     
    },
    {
      name: "Weather Application (SkyTrek)",
      description: "The Weather App is a React application built with Vite that provides real-time weather information, including current conditions, hourly and daily forecasts. It offers location-based forecasting, push notifications for severe weather alerts, and multiple location support. Users can customize the app's theme and temperature units, access cached data offline, and enjoy a fast, optimized experience.",
      techStack: ["React", "MUI"],
      features: ["Real-time Weather Info", "Location-Based Forecasting", "Save and Switch Locations", "Theme Customization"],
      demo: "https://skytrek.onrender.com",
      github: "https://github.com/sphllzulu/SkyTrek",
    },
    {
      name: "Shopping List",
      description: "This application allows users to store, manage, and refer to their favorite dishes as recipes. Built with ReactJS and JSON Server, it provides a platform to handle recipes with various features.",
      techStack: ["React", "Redux Toolkit", "MUI", "JSON server"],
      features: ["CRUD Operations", "Search Functionality", "Data persistence"],
      demo: "https://shopify-1-h4k2.onrender.com",
      github: "https://github.com/sphllzulu/shopify",
    },
  ],
  Backend: [
    {
      name: "Card Guessing Game",
      description: "A magical and interactive card matching game built with React, Vite, Material-UI (MUI), and Node.js with Express, featuring characters from the beloved Harry Potter series.",
      techStack: ["React", "Vite", "MUI", "Express", "Node", "DiceBear"],
      features: ["User Friendly UI", "Game reset functionality", "Victory pop-up to congratulate the player", "Timer"],
      demo: "https://guess-the-avatar.vercel.app/",
      github: "https://github.com/sphllzulu/nodeMemoryCardGame",
    },
    {
      name: "Recipe API with Authentication",
      description: "A simple RESTful API for managing recipes built with Node.js, Express, and MongoDB. Features include CRUD operations, input validation, pagination, error handling and user authentication and role-based access control.",
      techStack: ["Node", "MongoDB", "Express"],
      features: ["CRUD operations for recipes", "Input validation using Joi", "Pagination for recipe listings", "MongoDB integration", "RBAC"],
      github: "https://github.com/sphllzulu/mongoDBtask5/tree/auth",
    },
    {
      name: "Timed Quiz API",
      description: "This project implements an interactive timed quiz application with asynchronous question handling and dynamic progression.",
      techStack: ["Node.js", "Express"],
      features: ["Timed Questions", "Asynchronous Question Handling","Dynamic Question Progression"],
      github: "https://github.com/sphllzulu/NodeQuiz",
    
    },
  ],
  
  ReactNative: [
    {
      name: "Shopping List App",
      description: "Shopmate is a mobile shopping list application designed to help users manage their shopping tasks efficiently. Built with React Native and powered by Redux for state management, the app provides a seamless experience for users to log in, create shopping lists, and track purchased items.",
      techStack: ["React Native", "Redux Toolkit", "React navigation", "Expo"],
      features: ["High-quality audio recording", "Pause and resume recording", "Persistent recording storage", "Search recordings by number"],
      demo:"https://drive.google.com/file/d/1UAURCTn3vzfs7vCCmJJsRyhUypUTP3Lg/view?usp=drive_link",
      github: "https://github.com/sphllzulu/BirthdayCardApp",
    },
    {
      name: "Audio Recording App",
      description: "MicMagic is an intuitive audio recording mobile application built with React Native. Easily record, manage, and search through your audio recordings with a sleek, dark-themed interface.",
      techStack: ["React Native", "Expo"],
      features: ["High-quality audio recording","Pause and resume recording","Persistent recording storage"," Search recordings by number"],
      demo:"https://drive.google.com/file/d/1U0lQXCf6721WrdbE31HeqQMgHTVk6aM6/view?usp=drive_link",
      github: "https://github.com/sphllzulu/voiceR",
    
    },
  ],
  CollaboProjects: [
    {
      name: "Temp Trail",
      description: "TempTrail is a full-stack application consisting of a backend built with Node.js and frontend developed with React (Vite). The project helps users explore activities, search locations, and access weather information.",
      techStack: ["React", "FOURSQUARE API", "Node", "Mongo", "Express", "MapBox"],
      features: ["Express.js server with API routes", "User authentication", "Search and weather components", "Navigation & Map integration"],
      demo: "https://temperaturetrail-2.onrender.com",
      github: "https://github.com/sphllzulu/TempTrail",
    },
    {
      name: "Restaurant Reservation App",
      Collaborators: "Edward Thapelo Somo & Siphelele Zulu",
      description: "A modern restaurant reservation platform built with React Native, making it easy for users to discover, book, and review their favorite restaurants.",
      techStack: ["ReactNative","Expo","Stripe","Node","Mongo","Express"],
      features: ["Restaurant Discovery","Real-time Booking","Secure Payments","User Profiles","Reviews & Ratings","Smart Scheduling"],
      github: "https://github.com/EdwardCodeTriber/Restaurant-reservations-app/tree/main",
      
    },
    {
      name: "Time Management System",
      description: "The Time Management System is an intelligent, fully automated platform engineered to streamline attendance and time tracking for structured programs and workplaces. The system ensures data integrity through QR code verification, location-based geofencing, and automatic time collection, enabling participants to easily meet program attendance requirements (e.g., 90%) with complete transparency",
      techStack: ["React Native", "Expo", "Node", "Firebase", "Express"],
      features: ["Geofencing, QR code scanning, Document/image uploads, Automatic check-out,Attendance Dashboard"],
      demo: "https://drive.google.com/file/d/1i2dnqEx2LvJoZy5bmSpBiXplfLD5gcwn/view?usp=drive_link",
      github: "https://github.com/Soweto-CodeTribe/TimeManagementSystemScanner",
    },
  ],
  FullStack: [
    {
      name: "Hotel App (EazyLiving)",
      description: "EezyLiving is a modern hotel booking application where users can explore, book, and manage accommodations. Built using ReactJS, Firebase Authentication, Firebase Firestore, and Redux, it offers both guest and admin functionalities, including booking management, payment processing, and accommodation listings.",
      techStack: ["React", "MUI", "Firebase", "Redux Toolkit", "Stripe", "Nodemailer"],
      features: ["CRUD Operations", "Search Functionality", "Data persistence", "Payment Gateway"],
      demo: "https://eezyliving.onrender.com",
      github: "https://github.com/sphllzulu/eazyLiving",
    },
    {
      name: "Hotel App CMS Platform(EazyLiving)",
      description: "The EezyLiving Admin Panel is a secure interface for administrators to manage accommodations, bookings, and user information for the EezyLiving hotel booking application. This panel provides functionality to add, update, and manage accommodations and reservations.",
      techStack: ["React", "MUI", "Firebase", "Redux Toolkit", "Nodemailer"],
      features: ["CRUD Operations", "Search Functionality", "Data persistence"],
      demo: "https://eezyliving-admin-3.onrender.com",
      github: "https://github.com/sphllzulu/eezyLiving-Admin",
    },
  ],
};

// Enhanced Hogwarts house colors with better contrast
const houseColors = {
  Gryffindor: "#9D0000", // Darker red for better contrast
  Slytherin: "#1A472A", // Darker green
  Ravenclaw: "#0A1657", // Darker blue
  Hufflepuff: "#FFB700", // Slightly darker yellow
};

// Animation keyframes
const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); }
`;

const Spellbook = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box 
      sx={{ 
        mx: "auto", 
        maxWidth: 1100, 
        mt: 5, 
        p: { xs: 2, sm: 3 },
        backgroundImage: "url('https://www.transparenttextures.com/patterns/parchment.png')",
        backgroundColor: "rgba(245, 208, 66, 0.05)", // Parchment color
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://www.transparenttextures.com/patterns/old-map.png')",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }
      }}
    >
      {/* Magical decoration elements */}
      <Box sx={{ 
        position: "absolute", 
        top: 20, 
        left: 20, 
        width: 30, 
        height: 30, 
        backgroundColor: "transparent",
        border: "2px solid #FFD700",
        borderRadius: "50%",
        opacity: 0.6,
        animation: `${floatAnimation} 4s ease-in-out infinite`,
        display: { xs: "none", md: "block" }
      }} />
      
      <Box sx={{ 
        position: "absolute", 
        bottom: 40, 
        right: 40, 
        width: 20, 
        height: 20, 
        backgroundColor: "transparent",
        border: "2px solid #FFD700",
        borderRadius: "50%",
        opacity: 0.6,
        animation: `${floatAnimation} 5s ease-in-out infinite`,
        display: { xs: "none", md: "block" }
      }} />

      {/* Main title */}
      <Paper 
        elevation={3}
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          mb: 5,
          p: 2,
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))",
          borderRadius: 2,
          border: "2px solid #FFD700",
          animation: `${glowAnimation} 3s infinite`,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            fontFamily: '"Outfit", "Cinzel Decorative", fantasy',
            background: "linear-gradient(45deg, #FFD700, #FFC107, #FFD700)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `${shimmerAnimation} 3s linear infinite`,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
        >
          The Spellbook of Projects
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: '"Outfit", "Cinzel", serif',
            color: "#E0C9A6", // Parchment-like color
            fontStyle: "italic",
            mt: 1,
          }}
        >
          A collection of magical creations
        </Typography>
      </Paper>

      {/* Project Accordions */}
      {Object.entries(projects).map(([stack, stackProjects], index) => {
        const houseColor = Object.values(houseColors)[index % 4]; // Cycle through house colors
        let houseTextColor;
        
        // Determine text color based on background for better contrast
        switch (houseColor) {
          case houseColors.Gryffindor:
          case houseColors.Slytherin:
          case houseColors.Ravenclaw:
            houseTextColor = "#FFFFFF"; // White text for dark backgrounds
            break;
          case houseColors.Hufflepuff:
            houseTextColor = "#000000"; // Black text for light background
            break;
          default:
            houseTextColor = "#FFFFFF";
        }
        
        return (
          <Accordion
            key={stack}
            sx={{
              mb: 3,
              backgroundColor: "rgba(245, 245, 245, 0.9)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px !important", // Ensure border radius
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              "&:before": {
                borderRadius: "8px",
              },
              "&:hover": {
                boxShadow: `0 0 15px ${houseColor}`,
              },
              "& .MuiAccordionSummary-root": {
                borderRadius: "8px 8px 0 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: houseTextColor }} />}
              sx={{
                backgroundColor: houseColor,
                "&:hover": {
                  backgroundColor: houseColor,
                  opacity: 0.95,
                },
                transition: "all 0.3s ease",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* House emblem icon */}
                <Box 
                  sx={{ 
                    mr: 2,
                    width: { xs: 20, sm: 24 },
                    height: { xs: 20, sm: 24 },
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: `${floatAnimation} 2s ease-in-out infinite`,
                  }}
                >
                  <Typography sx={{ color: houseTextColor, fontSize: { xs: 12, sm: 14 } }}>
                    ✨
                  </Typography>
                </Box>
                
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{
                    fontFamily: '"Outfit", "Cinzel", fantasy',
                    color: houseTextColor,
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    fontWeight: "bold",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stack} Chapter
                </Typography>
              </Box>
            </AccordionSummary>
            
            <AccordionDetails 
              sx={{
                backgroundColor: "rgba(253, 240, 213, 0.4)", // Light parchment background
                backgroundImage: "url('https://www.transparenttextures.com/patterns/parchment.png')",
                backgroundBlendMode: "overlay",
                p: { xs: 2, sm: 3 },
              }}
            >
              {stackProjects.map((project, projectIndex) => (
                <Box
                  key={projectIndex}
                  sx={{
                    mb: 4,
                    p: { xs: 2, sm: 3 },
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
                    border: `1px solid ${houseColor}30`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 0 12px ${houseColor}`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{ 
                      fontWeight: "bold", 
                      color: houseColor,
                      fontFamily: '"Outfit", "Cinzel", fantasy',
                      mb: 1,
                    }}
                  >
                    ✨ {project.name}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      color: "#333333", // Dark text for readability
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#333333",
                        fontWeight: "medium",
                      }}
                    >
                      <strong>✦ Tech Stack:</strong> {project.techStack.join(", ")}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#333333",
                        fontWeight: "medium",
                      }}
                    >
                      <strong>✦ Features:</strong> {project.features.join(", ")}
                    </Typography>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      mt: 2,
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'stretch' : 'flex-start'
                    }}
                  >
                    {project.demo && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: houseColor,
                          color: houseTextColor,
                          fontFamily: '"Outfit", "Cinzel", fantasy',
                          fontWeight: "bold",
                          px: 3,
                          py: 1,
                          "&:hover": {
                            backgroundColor: houseColor,
                            opacity: 0.9,
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          },
                          transition: "all 0.3s ease",
                        }}
                        href={project.demo}
                        target="_blank"
                      >
                        View Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: houseColor,
                          color: houseColor,
                          fontFamily: '"Outfit", "Cinzel", fantasy',
                          fontWeight: "bold",
                          px: 3,
                          py: 1,
                          "&:hover": {
                            borderColor: houseColor,
                            backgroundColor: `${houseColor}10`,
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          },
                          transition: "all 0.3s ease",
                        }}
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
      
      {/* Footer decoration */}
      <Box
        sx={{
          textAlign: "center",
          mt: 3,
          mb: 1,
          color: "#6D4C41",
          opacity: 0.8,
          fontFamily: '"Outfit", serif',
          fontStyle: "italic",
          fontSize: "0.9rem",
        }}
      >
        <Typography variant="body2">
          ⚡ Mischief Managed ⚡
        </Typography>
      </Box>
    </Box>
  );
};

export default Spellbook;



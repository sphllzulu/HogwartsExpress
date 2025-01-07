import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@emotion/react";
import './SpellBook.css'

const projects = {
    React: [
      {
        name: "UI Mimic challenge",
        description: "We were to mimic the design of an image as closely as possible using only react and css",
        techStack: ["React", "CSS"],
        features: ["Static Content", "Responsiveness"],
        challenges: "Making the site responsive",
        solutions: "Used React's component based architecture coupled with CSS flexbox to achieve responsiveness",
        demo: "https://1st-ui-challenge.vercel.app/",
      },
      {
        name: "Employee Registration App",
        description: "This Employee Registration Activity web application allows users to manage employee records, including features for creating, reading, updating, and deleting (CRUD) employee information. The application also supports searching, filtering, and data persistence using local storage.",
        techStack: ["React", "CSS", "Local Storage"],
        features: ["CRUD Operations","Search Functionality","Data persistence"],
        challenges: "Data kept disappearing when refreshing",
        solutions: "Used local storage to persist the data",
        demo: "https://registr-three.vercel.app/",
      },
      {
        name: "To-Do List Application",
        description: "This To-Do List Application is a single-page app with three main pages: Login, Registration, and Home. Users can manage their to-do list items with features such as adding, editing, deleting, and searching items. The app uses sql.js for data storage and Material-UI for styling.",
        techStack: ["React", "MUI", "sqljs"],
        features: ["CRUD Operations","Search Functionality","Data persistence"],
        challenges: "Another user was able to see another user's tasks which is not ideal",
        solutions: "To track the user's activity I store the user ID on local storage along with their tasks so that the correct tasks are retrieved",
        demo: "https://glowing-malasada-70b205.netlify.app/",
      },
      {
        name: "Weather Application (SkyTrek)",
        description: "The Weather App is a React application built with Vite that provides real-time weather information, including current conditions, hourly and daily forecasts. It offers location-based forecasting, push notifications for severe weather alerts, and multiple location support. Users can customize the app's theme and temperature units, access cached data offline, and enjoy a fast, optimized experience.",
        techStack: ["React", "MUI"],
        features: ["Real-time Weather Info","Location-Based Forecasting","Save and Switch Locations","Theme Customization"],
        challenges: "Push notifications and user's location was accessed even though they did not agree to it",
        solutions: "Implemented comprehensive error handling for different geolocation error scenarios, whether permission denied or granted",
        demo: "https://skytrek.onrender.com",
      },
      {
        name: "Gourmet Guide (Recipe App)",
        description: "This application allows users to store, manage, and refer to their favorite dishes as recipes. Built with ReactJS and JSON Server, it provides a platform to handle recipes with various features.",
        techStack: ["React", "MUI","JSON Server"],
        features: ["CRUD Operations","Search Functionality","Data persistence","Category Filtering"],
        challenges: "Every user was able to update and delete another user's recipe which is not ideal",
        solutions: "Introduced Auth context which track user activity and ensures that user is able to only edit and delete their own stuff",
        demo: "https://gourmetguide-3.onrender.com",
      },
      {
        name: "Shopping List App",
        description: "This application allows users to store, manage, and refer to their favorite dishes as recipes. Built with ReactJS and JSON Server, it provides a platform to handle recipes with various features.",
        techStack: ["React","Redux Toolkit", "MUI","JSON server"],
        features: ["CRUD Operations","Search Functionality","Data persistence"],
        challenges: "Data kept disappearing when refreshing",
        solutions: "Used React state management and component based architecture",
        demo: "https://shopify-1-h4k2.onrender.com",
      },
      {
        name: "Hotel App (EazyLiving)",
        description: "EezyLiving is a modern hotel booking application where users can explore, book, and manage accommodations. Built using ReactJS, Firebase Authentication, Firebase Firestore, and Redux, it offers both guest and admin functionalities, including booking management, payment processing, and accommodation listings.",
        techStack: ["React", "MUI","Firebase","Redux Toolkit","Stripe","Nodemailer"],
        features: ["CRUD Operations","Search Functionality","Data persistence","Payment Gateway"],
        challenges: "Enabling email notifications each time a user books a room",
        solutions: "I set up a nodemailer server which is responsible for sending emails the user each time they book a room ",
        demo: "https://eezyliving.onrender.com",
      },
      {
        name: "Hotel App CMS Platform(EazyLiving)",
        description: "The EezyLiving Admin Panel is a secure interface for administrators to manage accommodations, bookings, and user information for the EezyLiving hotel booking application. This panel provides functionality to add, update, and manage accommodations and reservations.",
        techStack: ["React", "MUI","Firebase","Redux Toolkit","Nodemailer"],
        features: ["CRUD Operations","Search Functionality","Data persistence"],
        challenges: "Uploading images, I was previously using online images to display on the main app,which is not ideal because user would first have to get a url for the image before uploading, which is not ideal",
        solutions: "I used firebase storage, so user can upload an image from their gallery and it will be sent to firebase",
        demo: "https://eezyliving-admin-3.onrender.com",
      },
      
    ],
    Node: [
      {
        name: "Basic Server",
        description: "This is a simple HTTP server built with Node.js. It handles different routes such as the home page, an about page, a JSON API response, and a POST request to handle incoming data. The server listens on port 3000.",
        techStack: ["Node.js"],
        features: ["CRUD API", "Authentication"],
        challenges: "Getting a hang of the http methods and headers was a bit tricky",
        solutions: "Creating a basic server, over and over again helped me get used to the syntax",
        demo: "https://github.com/sphllzulu/basicServer",
      },
      {
        name: "Timed Quiz Application",
        description: "This project implements an interactive timed quiz application with asynchronous question handling and dynamic progression.",
        techStack: ["Node.js", "Express"],
        features: ["Timed Questions", "Asynchronous Question Handling","Dynamic Question Progression"],
        challenges: "ReadlineSync made the application not work as expected",
        solutions: "Opted for readline which handles asynchronous operations",
        demo: "https://github.com/sphllzulu/NodeQuiz",
      },
      {
        name: "Shopping List File Manager & REST API",
        description: "This project implements a basic File Manager and a REST API for managing a shopping list using Node.js. The File Manager leverages Node.js' file system capabilities to store shopping list data in JSON format, while the REST API exposes CRUD operations to manage the shopping list via HTTP endpoints.",
        techStack: ["Node.js"],
        features: ["File Manager", "Shopping List API","Error Handling & Validation"],
        challenges: "Setting up proper error handling for file operations",
        solutions: "Checked if directories/files exist before trying to create them or doing any operations",
        demo: "https://github.com/sphllzulu/nodeShoppingList",
      },
      {
        name: "Book Directory API",
        description: "This is a simple Node.js API for managing a book directory. It allows you to perform CRUD (Create, Read, Update, Delete) operations on book entries, with data persistence using a JSON file.",
        techStack: ["Node.js"],
        features: ["List all books", "Get a specific book by ISBN","Add a new book","Update an existing book","Delete a book"],
        challenges: "At first I was auto generating the ISBNs,that would cause authenticity issues",
        solutions: "I added the ISBN as one of the fields when adding a book to ensure authenticity",
        demo: "https://github.com/sphllzulu/bookDirectory",
      },
      {
        name: "Card Guessing Game",
        description: "A magical and interactive card matching game built with React, Vite, Material-UI (MUI), and Node.js with Express, featuring characters from the beloved Harry Potter series.",
        techStack: ["React","Vite","MUI","Express","Node","DiceBear"],
        features: ["User Friendly UI", "Game reset functionality","Victory pop-up to congratulate the player","Timer"],
        challenges: "I had a problem connecting the UI to the backend",
        solutions: "The back was handling operations such as starting the timer, starting the game and the score, while the front is just the ui and handles the matching of the avatars",
        demo: "https://guess-the-avatar.vercel.app/",
      },
      {
        name: "Employee Registration with Firebase",
        description: "This is a full-stack Employee Management System with a React frontend and an Express.js backend. It allows users to view, add, edit, and delete employee records, providing a user-friendly interface for managing employee data efficiently.",
        techStack: ["React","Vite","MUI","Express","Node","Firebase"],
        features: ["Responsive Layout", "Search Functionality","Add, Update & Delete employees","Display Images"],
        challenges: "Connecting an existing project and migrating to firebase instead from local storage was a bit tricky, especially handling the images, I was unable to see the images",
        solutions: "Created a separate component to handle images and used it throughout the app for images, it stored the uploaded pictures on firebase storage and retrieved the url and used it to display the images ",
        demo: "https://node-regipro.vercel.app/",
      },
      {
        name: "Employee Registration with Firebase",
        description: "This is a full-stack Employee Management System with a React frontend and an Express.js backend. It allows users to view, add, edit, and delete employee records, providing a user-friendly interface for managing employee data efficiently.",
        techStack: ["React","Vite","MUI","Express","Node","Firebase"],
        features: ["Responsive Layout", "Search Functionality","Add, Update & Delete employees","Display Images"],
        challenges: "Making the tables responsive was extremely challenging",
        solutions: "Opted to make the tables scrollable and some screen the table is vertical ",
        demo: "https://noderegipro-2.onrender.com",
      },
      {
        name: "Deployed Server",
        description: "This is a simple Node.js application that sets up a server using Express and includes basic routing. The app is deployed on Render and can be accessed online.",
        techStack: ["Express","Node"],
        features: [" Basic Express Server", "Static Routes","Dynamic Routing","Error Handling"],
        challenges: "Finding a service that would allow me to host a server without having to transform my code and make it use serverless functions",
        solutions: "I used Render which is great for full stack applications ",
        demo: "https://serverdeployment-fm64.onrender.com",
      },
      
    ],
    MongoDB: [
      {
        name: "Creating MongoDB Database",
        description: "This project involves using MongoDB to create a database called Codetribe and setting up collections for Facilitators, Trainees, and Projects. Below are the specific instructions and MongoDB shell commands to achieve the project outcomes.",
        techStack: ["Mongo Shell","MongoDB"],
        features: [" Database Creation", "Collection Setup","Data Insertion","Data Manipulation"],
        challenges: "Difficulty installing MongoDB or ensuring the MongoDB server is running",
        solutions: "Used MongoDB Compass to verify that the server is running ",
        demo: "https://github.com/sphllzulu/mongoDB1stProject",
      },
      {
        name: "Library Management System",
        description: "This project implements a Library Management System using MongoDB. The README outlines the specific MongoDB shell commands used to achieve project outcomes and provides clear instructions on how to start the MongoDB shell (Mongosh) and utilize the necessary commands effectively.",
        techStack: ["Mongo Shell","MongoDB"],
        features: [" Database Creation", "Collection Setup","Data Insertion","Data Manipulation"],
        challenges: "Writing advanced queries, such as finding available books published after 1950.",
        solutions: "Broke queries into smaller parts to debug and test. ",
        demo: "https://github.com/sphllzulu/MongoDBTask3",
      },
      {
        name: "Recipe API",
        description: "A simple RESTful API for managing recipes built with Node.js, Express, and MongoDB. Features include CRUD operations, input validation, pagination, and error handling.",
        techStack: ["Node","MongoDB","Express"],
        features: ["CRUD operations for recipes", "Input validation using Joi","Pagination for recipe listings","MongoDB integration"],
        challenges: "Validation was an issue, if user would input data as an unexpected data type it would be converted",
        solutions: "Used Joi for validation, I did not have to memorize the regular expressions ",
        demo: "https://github.com/sphllzulu/mongoDB1stProject",
      },
      {
        name: "Recipe API with Authentication",
        description: "A simple RESTful API for managing recipes built with Node.js, Express, and MongoDB. Features include CRUD operations, input validation, pagination, error handling and user authentication and role-based access control. ",
        techStack: ["Node","MongoDB","Express"],
        features: ["CRUD operations for recipes", "Input validation using Joi","Pagination for recipe listings","MongoDB integration","RBAC",],
        challenges: "I had an issue with issuing a token on JWT",
        solutions: "Opted for session based authentication via express-session",
        demo: "https://github.com/sphllzulu/mongoDBtask5/tree/auth",
      },
      
    ],
    ReactNative: [
      {
        name: "Birthday Card Creator",
        description: "A React Native app built with Expo for creating personalized birthday cards! This app allows users to add custom messages, images, and decorations to create unique birthday cards. Cards can be saved and viewed later, styled like actual birthday cards.",
        techStack: ["React Native"],
        features: ["Customizable Text","Image Upload","Decorations","Save and View Cards"],
        challenges: "anytime I type one letter I lose focus and have to click on the input again and again to type one by one. I suspect that this happened because of the OnchangeText prop I've put on the inputs that probably rerender. ",
        solutions: "Simplified the TextInput component by removing unnecessary focus handling",
        demo: "https://github.com/sphllzulu/BirthdayCardApp",
      },
      {
        name: "Audio Recording App",
        description: "MicMagic is a powerful and intuitive audio recording mobile application built with React Native. Easily record, manage, and search through your audio recordings with a sleek, dark-themed interface.",
        techStack: ["React Native", "Expo"],
        features: ["High-quality audio recording","Pause and resume recording","Persistent recording storage"," Search recordings by number"],
        challenges: "Designing this application was quite difficult, react native was still fairly new to me",
        solutions: "I took a simplistic approach and made the app less complicated but fully functional",
        demo: "https://github.com/sphllzulu/voiceR",
      },
      {
        name: "Audio Recording App with Authentication",
        description: "MicMagic is a powerful and intuitive audio recording mobile application built with React Native. Easily record, manage, and search through your audio recordings with a sleek, purple-themed interface.",
        techStack: ["React Native","Expo","Firebase"],
        features: ["High-quality audio recording","Pause and resume recording","Persistent recording storage"," Search recordings by number","Update the recording name"],
        challenges: "Cloud intergration was a huge challenge ",
        solutions: "I used Firebase for cloud intergration, so the voice notes are being saved on firebase storage, however they are not being synced across devices",
        demo: "https://github.com/sphllzulu/voiceRec",
      },
      {
        name: "React Native E-commerce Payment App with Paystack",
        description: "This React Native mobile application demonstrates a simple e-commerce payment flow integrated with Paystack, a popular payment gateway in Africa. The app provides a straightforward cart and payment experience that developers can use as a reference or starting point for their own mobile commerce applications.",
        techStack: ["React Native", "Expo"],
        features: ["Dynamic product listing","Cart total calculation","Seamless Paystack payment integration","Payment success and cancellation handling"],
        challenges: "I was used to working with stripe which is simple staightforward,so we were challenged with working with a brand new payment option which was challenging",
        solutions: "Paystack webview documentation was very helpful in this regard, went through it and was able to complete the task",
        demo: "https://github.com/sphllzulu/paymentGateway",
      },
      {
        name: "Geolocation Image Gallery App",
        description: "This mobile application is a sophisticated image gallery that allows users to capture, store, and explore images with geolocation tracking. Built with React Native and Expo, the app provides a seamless experience for documenting and organizing visual memories with precise location information.",
        techStack: ["React Native", "Expo","SQLite"],
        features: ["Secure User Authentication","Camera Integration","Geolocation Tracking"," Advanced Search"],
        challenges: "Working with SQLite and Geolocation was pretty challenging",
        solutions: "Expo SQLite documentation was also very helpful, it have me the most recent queries to perform crud operations",
        demo: "https://github.com/sphllzulu/GalleryApp",
      },
      {
        name: "Shopping List",
        description: "Shopmate is a mobile shopping list application designed to help users manage their shopping tasks efficiently. Built with React Native and powered by Redux for state management, the app provides a seamless experience for users to log in, create shopping lists, and track purchased items. ",
        techStack: ["React Native", "Redux Toolkit","React navigation","Expo"],
        features: ["High-quality audio recording","Pause and resume recording","Persistent recording storage"," Search recordings by number"],
        challenges: "Getting the shopping list content to persist ",
        solutions: "I used redux's persistor combined with async storage",
        demo: "https://github.com/sphllzulu/BirthdayCardApp",
      },
      
    ],
    CollaboProjects: [
      {
        name: "Restaurant Reservation App",
        Collaborators: "Edward Thapelo Somo & Siphelele Zulu",
        description: "A modern restaurant reservation platform built with React Native, making it easy for users to discover, book, and review their favorite restaurants.",
        techStack: ["ReactNative","Expo","Stripe","Node","Mongo","Express"],
        features: ["Restaurant Discovery","Real-time Booking","Secure Payments","User Profiles","Reviews & Ratings","Smart Scheduling"],
        challenges: "Working with someone on a project",
        solutions: "Constant communication was very helpful, we were able to solve most issues because we communicated a lot",
        demo: "https://github.com/EdwardCodeTriber/Restaurant-reservations-app/tree/main",
      },
      {
        name: "Restaurant Reservation App",
        description: "A comprehensive restaurant reservation system with an admin dashboard that enables customers to book tables and restaurants to manage their reservations efficiently.",
        techStack: ["ReactNative","Expo","Stripe","Node","Mongo","Express"],
        features: ["User authentication","Browse beauty products","Shopping cart management","Responsive design "],
        challenges: "Uploading images on firebase was a huge problem, we could not get the images to appear, it seemed like the link that we were getting back from firebase was corrupted",
        solutions: "We opted for Cloudinary which was really just a means to an end,the app has a uri generator and user can just paste the uri to upload an image",
        demo: "https://quikkmart-1.onrender.com",
      },
    ],
    Assessments: [
     {
        name: "Beauty Mart MVP",
        description: "Beauty Mart is a full-stack e-commerce marketplace application specialized in beauty products. This MVP (Minimum Viable Product) version provides essential features for managing and purchasing beauty products online.",
        techStack: ["React","MUI","Redux Toolkit"],
        features: ["User authentication","Browse beauty products","Shopping cart management","Responsive design "],
        challenges: "Deployment and planning how to structure the app with very little time",
        solutions: "Even though I had poorly planned the app, I was able to break the tasks into small manageable tasks and assign a time limit to each task. I deployed the frontend and backend separately on Render",
        demo: "https://quikkmart-1.onrender.com",
      },
    ],
  };
  
  const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Hogwarts house colors
const houseColors = {
  Gryffindor: "#B22222",
  Slytherin: "#006400",
  Ravenclaw: "#0E1A40",
  Hufflepuff: "#FFDB00",
};


const Spellbook = () => (
  <Box sx={{ mx: "auto", maxWidth: 900, mt: 5, p: 3 }}>
    {/* Title */}
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        fontFamily: '"Outfit", fantasy',
        background: "linear-gradient(45deg, #f5d042, #ffa500, #f5d042)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: `${shimmerAnimation} 3s linear infinite`,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        mb: 4,
      }}
    >
      The Spellbook of Projects
    </Typography>

    {/* Accordion for each project stack */}
    {Object.entries(projects).map(([stack, stackProjects], index) => {
      const houseColor = Object.values(houseColors)[index % 4]; // Cycle through house colors
      return (
        <Accordion
          key={stack}
          sx={{
            mb: 2,
            backgroundColor: "rgba(245, 208, 66, 0.1)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              boxShadow: `0 0 15px ${houseColor}`,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: houseColor }} />}
            sx={{
              backgroundColor: "rgba(94, 11, 11, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(94, 11, 11, 0.2)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Outfit", fantasy',
                color: houseColor,
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
              {stack} Chapter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {stackProjects.map((project, projectIndex) => (
              <Box
                key={projectIndex}
                sx={{
                  mb: 4,
                  p: 2,
                  backgroundColor: "rgba(245, 208, 66, 0.05)",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: `0 0 10px ${houseColor}`,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: houseColor }}
                >
                  ✨ {project.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </Typography>
                <Typography variant="body2">
                  <strong>Features:</strong> {project.features.join(", ")}
                </Typography>
                <Typography variant="body2">
                  <strong>Challenges:</strong> {project.challenges}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <strong>Solutions:</strong> {project.solutions}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: houseColor,
                    color: "#5e0b0b",
                    fontFamily: '"Outfit", fantasy',
                    "&:hover": {
                      backgroundColor: houseColor,
                      opacity: 0.9,
                    },
                  }}
                  href={project.demo}
                  target="_blank"
                >
                  View Demo
                </Button>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      );
    })}
  </Box>
);

export default Spellbook;

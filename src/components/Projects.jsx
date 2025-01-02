// src/components/Projects.js
import { motion } from 'framer-motion';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const projects = [
  { title: 'ToDoList', image: 'toDoReact.PNG', description: 'An app that recognizes spells using ML...' },
  { title: 'nodeMemoryGame', image: 'MatchAvatar.PNG', description: 'A hub for magical creatures and spells...' },
  { title: 'nodeMemoryGame', image: 'Shoppinglist.PNG', description: 'A hub for magical creatures and spells...' },
  { title: 'nodeMemoryGame', image: 'Shoppinglist.PNG', description: 'A hub for magical creatures and spells...' },
];

const Projects = () => (
  <Grid container spacing={4} justifyContent="center" sx={{ p: 4 }}>
    {projects.map((project, index) => (
      <Grid item xs={12} md={6} key={index}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card sx={{ backgroundColor: '#2b2b2b', color: '#f5d042' }}>
            <CardMedia component="img" height="140" image={project.image} alt={project.title} />
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    ))}
  </Grid>
);

export default Projects;

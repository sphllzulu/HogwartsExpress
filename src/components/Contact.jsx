// src/components/Contact.js
import { motion } from 'framer-motion';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => (
  <Box sx={{ textAlign: 'center', p: 4 }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">Send an owl with your message:</Typography>
      <form>
        <TextField fullWidth label="Your Email" sx={{ my: 2 }} />
        <TextField fullWidth label="Your Message" multiline rows={4} sx={{ my: 2 }} />
        <Button variant="contained" color="primary" type="submit">
          Send Owl
        </Button>
      </form>
    </motion.div>
  </Box>
);

export default Contact;

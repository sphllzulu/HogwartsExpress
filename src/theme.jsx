import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5e0b0b', // Gryffindor red
    },
    secondary: {
      main: '#f5d042', // Hufflepuff yellow
    },
    background: {
      default: '#121212', // Dark background
    },
  },
  typography: {
    fontFamily: "'Lumos', outfit", // Use "Lumos" or "Parry Hotter" if available
  },
});

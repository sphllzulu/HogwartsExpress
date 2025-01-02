// src/App.js
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { theme } from './theme';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box, CssBaseline } from '@mui/material';

import './App.css';
import Skills from './components/Skills';
import Spellbook from './components/SpellBook';

function App() {
  

  return (
    <MUIThemeProvider theme={theme}>
      <NextThemeProvider attribute="class" defaultTheme="system">
        <CssBaseline />
        <Header />
        <Box sx={{ mt: 4 }}>
          <About />
         <Skills/>
         <Spellbook/>
          {/* <Projects /> */}
          <Contact />
        </Box>
      </NextThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;

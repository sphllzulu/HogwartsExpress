
// import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// import { ThemeProvider as NextThemeProvider } from 'next-themes';
// import { theme } from './theme';
// import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import { Box, CssBaseline } from '@mui/material';
// import FeedbackAndReflections from './components/Feedback'
// import './App.css';
// import Skills from './components/Skills';
// import Spellbook from './components/SpellBook';
// import PostProgramGoals from './components/Goals'

// function App() {
  

//   return (
//     <MUIThemeProvider theme={theme}>
//       <NextThemeProvider attribute="class" defaultTheme="system">
//         <CssBaseline />
//         <Header />
//         <Box sx={{ mt: 4 }}>
//           <About />
//          <Skills/>
//          <Spellbook/>
//          <FeedbackAndReflections/>
//          <PostProgramGoals/>
//           <Contact />
//         </Box>
//       </NextThemeProvider>
//     </MUIThemeProvider>
//   );
// }

// export default App;


import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { theme } from './theme';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box, CssBaseline } from '@mui/material';
import FeedbackAndReflections from './components/Feedback';
import './App.css';
import Skills from './components/Skills';
import Spellbook from './components/SpellBook';
import PostProgramGoals from './components/Goals';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <MUIThemeProvider theme={theme}>
      <NextThemeProvider attribute="class" defaultTheme="system">
        <CssBaseline />
        <Header />
        <Box sx={{ mt: 4 }}>
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Skills />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Spellbook />
          </ScrollReveal>
          
          <ScrollReveal delay={1}>
            <Contact />
          </ScrollReveal>
        </Box>
      </NextThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
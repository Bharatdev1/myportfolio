import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ContactSection from './components/Contact/ContactSection';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#646cff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ pt: '64px' }}> {/* Add padding top to account for fixed navbar */}
        <Hero/>
        <Skills />
        <Experience />
        <Projects />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;
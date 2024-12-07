import React from 'react';
import { Box, Typography, Container, Button, Stack, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #646cff, #535bf2)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Bharat Vasnani
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  my: 2,
                  color: 'grey.300'
                }}
              >
                Frontend Developer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  maxWidth: '600px',
                  mb: 4,
                  color: 'grey.400',
                  fontSize: '1.1rem',
                  lineHeight: 1.7
                }}
              >
                Building exceptional digital experiences with modern web technologies.
                Specialized in creating responsive, user-centric applications that drive business growth.
              </Typography>
              <Stack direction="row" spacing={2}>
              <a href="https://github.com/Bharatdev1/myportfolio"><Button 
                  variant="contained" 
                  size="large"
                  sx={{
                    borderRadius: '28px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  View Projects
                </Button></a>
                <a href="./bharat_vasnani_resume.pdf"> <Button 
                  variant="outlined" 
                  size="large"
                  sx={{
                    borderRadius: '28px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Download CV
                </Button></a>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton color="primary" size="large">
                  <a href="https://github.com/Bharatdev1"><GitHub sx={{ color: 'white' }}/></a> 
                </IconButton>
               <IconButton color="primary" size="large">
               <a href="https://www.linkedin.com/in/bharat-vasnani-4497a6112/"> <LinkedIn sx={{ color: 'white' }} /> </a>
                </IconButton>
               <IconButton color="primary" size="large">
               <a href="https://github.com/Bharatdev1/myportfolio">  <Code sx={{ color: 'white' }} /></a>
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/hero-illustration.svg"
                alt="Developer Illustration"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  display: { xs: 'none', md: 'block' }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(100, 108, 255, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
};

export default Hero;

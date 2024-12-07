import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../../data/constants';

const Projects = () => {
  return (
    <Container id="projects" sx={{ py: 8 }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Featured Projects
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {PROJECTS_DATA.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
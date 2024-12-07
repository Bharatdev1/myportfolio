import React from 'react';
// import { Container, Typography, Timeline } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { Timeline } from '@mui/lab';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCE_DATA } from '../../data/constants';

const Experience = () => {
  return (
    <Container id="experience" sx={{ py: 8 }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Professional Experience
        </Typography>
      </motion.div>
      <Timeline position="alternate">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience;
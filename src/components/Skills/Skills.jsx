import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { SKILLS_DATA } from '../../data/constants';

const Skills = () => {
  return (
    <Container id="skills" sx={{ py: 8 }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Skills & Expertise
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {SKILLS_DATA.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SkillCard {...category} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
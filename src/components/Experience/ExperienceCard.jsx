import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const ExperienceCard = ({ role, company, duration, description }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'primary.main'
              }
            }}
          >
            <Typography 
              variant="h6" 
              sx={{
                color: 'grey.100',
                fontWeight: 600,
                mb: 1
              }}
            >
              {role}
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                color: 'primary.main',
                mb: 1
              }}
            >
              {company}
            </Typography>
            <Chip 
              label={duration}
              size="small"
              sx={{
                bgcolor: 'rgba(100, 108, 255, 0.1)',
                color: 'primary.main',
                mb: 2
              }}
            />
            <Typography 
              variant="body2"
              sx={{
                color: 'grey.400',
                lineHeight: 1.7
              }}
            >
              {description}
            </Typography>
          </Paper>
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceCard;
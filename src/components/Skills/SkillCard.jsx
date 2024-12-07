import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: '100%',
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
          gutterBottom 
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            mb: 3
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {skills.map((skill, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  {skill}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  {Math.floor(Math.random() * (100 - 75) + 75)}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={Math.floor(Math.random() * (100 - 75) + 75)}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 3
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default SkillCard;
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const ProjectCard = ({ title, description, image, technologies }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        sx={{ 
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
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'grey.100'
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 3,
              color: 'grey.400',
              lineHeight: 1.7
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  bgcolor: 'rgba(100, 108, 255, 0.1)',
                  color: 'primary.main',
                  borderRadius: '16px'
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'grey.400' }}>
              <GitHub />
            </IconButton>
            <IconButton size="small" sx={{ color: 'grey.400' }}>
              <Launch />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
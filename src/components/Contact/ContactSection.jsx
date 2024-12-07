import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../../data/constants';

const ContactSection = () => {
  const getIcon = (title) => {
    switch (title) {
      case 'Email':
        return <Email />;
      case 'Phone':
        return <Phone />;
      case 'Location':
        return <LocationOn />;
      default:
        return null;
    }
  };

  return (
    <Container id="contact" sx={{ py: 8 }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Get In Touch
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {CONTACT_DATA.map((info, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                {getIcon(info.title)}
                <Typography variant="h6">{info.title}</Typography>
                <Typography variant="body1">{info.value}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactSection;
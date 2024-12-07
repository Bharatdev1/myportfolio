import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button color="inherit" href="#home">BV</Button>
        </motion.div>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button color="inherit" href={`#${item.toLowerCase()}`}>{item}</Button>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="contained" color="primary"><a style={{textDecoration:"none" , color:"white"}} href="./bharat_vasnani_resume.pdf"> Download CV </a></Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
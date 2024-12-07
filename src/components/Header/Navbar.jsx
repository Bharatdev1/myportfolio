import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, useMediaQuery, Drawer } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:893px)'); // Adjust the breakpoint here
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

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
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {isMobile && (
            <Button color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </Button>
          )}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                color: 'white',
              },
            }}
          >
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Button key={item} onClick={handleDrawerClose} href={`#${item.toLowerCase()}`} sx={{ color: 'white' }}>
                  {item}
                </Button>
              ))}
              <Button variant="contained" color="primary" onClick={handleDrawerClose}>
                <a style={{ textDecoration: 'none', color: 'white' }} href="./bharat_vasnani_resume.pdf">
                  Download CV
                </a>
              </Button>
            </Box>
          </Drawer>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {/* Desktop navigation */}
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
            <Button variant="contained" color="primary">
              <a style={{ textDecoration: 'none', color: 'white' }} href="./bharat_vasnani_resume.pdf">
                Download CV
              </a>
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

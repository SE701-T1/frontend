import React, { useState } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import styles from './Nav.module.css';
import SideBar from './SideBar';
import NavBar from './NavBar';

// The sidebar drawer width is set to 240px
const drawerWidth = 240;

/**
 * Navigation component that wraps around children with navigation bars
 */
function Nav({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar open={open} handleOpen={handleOpen} drawerWidth={drawerWidth} />
      <SideBar open={open} handleClose={handleClose} drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className={styles.drawerHeader} />
        {children}
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;

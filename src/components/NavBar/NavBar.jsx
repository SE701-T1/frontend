import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, CssBaseline, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import styles from './Nav.module.css';
import LogoSVG from '../../assets/menu-icons/logo.svg';

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function NavBar({ open, handleOpen, drawerWidth }) {
  return (
    <>
      <CssBaseline />
      <CustomAppBar color="secondary" position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}>
            <MenuIcon />
          </IconButton>
          <img src={LogoSVG} alt="logo" />
          <Typography variant="h6" noWrap component="div" className={styles.navbarTitle}>
            Class Buddy Matcher
          </Typography>
        </Toolbar>
      </CustomAppBar>
    </>
  );
}

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  drawerWidth: PropTypes.number.isRequired,
};

export default NavBar;

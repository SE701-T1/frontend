import React from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import styles from './Nav.module.css';
import CoursesIcon from '../../assets/menu-icons/courses.svg';
import FindMatchesIcon from '../../assets/menu-icons/find-matches.svg';
import ChatIcon from '../../assets/menu-icons/chat.svg';
import AccountsIcon from '../../assets/menu-icons/accounts.svg';

// Sidebar menu is set here and corresponds to pages/Routes
const menu = [
  {
    title: 'Courses',
    icon: CoursesIcon,
    link: '/courses',
  },
  {
    title: 'Find Matches',
    icon: FindMatchesIcon,
    link: '/find-matches',
  },
  {
    title: 'Chat',
    icon: ChatIcon,
    link: '/chat',
  },
  {
    title: 'Accounts',
    icon: AccountsIcon,
    link: '/accounts',
  },
];

// drawer design from material UI docs found here:
// https://mui.com/components/drawers/#mini-variant-drawer

const openedMixin = (theme) => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0, // hide the sidebar in mobile view
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function SideBar({ open, handleClose, drawerWidth }) {
  return (
    <CustomDrawer
      className={styles.customDrawer}
      variant="permanent"
      open={open}
      drawerWidth={drawerWidth}>
      <div className={styles.drawerHeader}>
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menu.map(({ title, icon, link }) => (
          <ListItem
            key={title}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            button
            component={Link}
            to={link}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              <img src={icon} alt={title} />
            </ListItemIcon>
            <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  drawerWidth: PropTypes.number.isRequired,
};

export default SideBar;

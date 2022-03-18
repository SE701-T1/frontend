import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Dialog, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import styles from './PopUp.module.css';
import ProfileBadge from '../ProfileBadge/ProfileBadge';

function PopUp({ name, buddyNumber, open }) {

  const sharedCourses = ['course1', 'course2'];
  const courses = sharedCourses.join(', ');

  return (
    <Dialog open={open} fullWidth>
      <div className={styles.icon}>
        <ProfileBadge size="250px" marginTop="20px" />
      </div>
      <div className={styles.title}>
        <h1> {name} </h1>
      </div>
      <div className={styles.courses}>
        <Typography>Also takes {courses.toUpperCase()}</Typography>
      </div>
      <div className={styles.buddies}>
            <PeopleIcon style={{ marginRight: '5px'}}/>
        {buddyNumber} Buddies
      </div>
      <div className={styles['message-button']}>
        <Button
          variant="contained"
          style={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
          say hi
        </Button>
      </div>
      <div className={styles['skip-button']}>
        <Button
          variant="outlined"
          style={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
          skip
        </Button>
      </div>
    </Dialog>
  );
}

export default PopUp;

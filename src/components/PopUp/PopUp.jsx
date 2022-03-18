import React from 'react';
import { Button, Dialog, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import styles from './PopUp.module.css';
import ProfileBadge from '../ProfileBadge/ProfileBadge';

function PopUp({ name, buddyNumber, open, size }) {
  const sharedCourses = ['course1', 'course2'];
  const courses = sharedCourses.join(', ');

  return (
    <Dialog open={open} fullWidth data-testid='popup'>
      <div className={styles.icon}>
        <ProfileBadge name={name} size={size}/>
      </div>
      <div className={styles.title}>
        <h1> {name} </h1>
      </div>
      <div className={styles.courses}>
        <Typography>Also takes {courses.toUpperCase()}</Typography>
      </div>
      <div className={styles.buddies}>
        <PeopleIcon sx={{ marginRight: '5px' }} />
        {buddyNumber} Buddies
      </div>
      <div className={styles['message-button']}>
        <Button
          variant="contained"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
          say hi
        </Button>
      </div>
      <div className={styles['skip-button']}>
        <Button
          variant="outlined"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
          skip
        </Button>
      </div>
    </Dialog>
  );
}

export default PopUp;

import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Dialog, Typography } from '@mui/material';
// import styles from './PopUp.module.css';
import PeopleIcon from '@mui/icons-material/People';
import ProfileBadge from '../ProfileBadge/ProfileBadge';

// const [open, setOpen] = React.useState(true);
//
function PopUp({ name, buddyNumber, open }) {
  // const handleClose = () => {
  //     onClose();
  // };

  const sharedCourses = ['course1', 'course2'];
  const courses = sharedCourses.join(", ");

  return (
    <Dialog open={open}>
      <div>
        <ProfileBadge size="300px" />
        <h1> {name} </h1>
        <Typography>also takes {courses}</Typography>
      </div>
      <div>
        <PeopleIcon />
        <Typography>{buddyNumber} Buddies</Typography>
      </div>
      <div>
        <Button variant="contained">say hi</Button>
      </div>
      <div>
        <Button variant="outlined">skip</Button>
      </div>
    </Dialog>
  );
}

// PopUp.propTypes = {
//   name: PropTypes.string.isRequired,
//   sameCourses: PropTypes.array,
//   numBuddies: PropTypes.number,
// };

export default PopUp;

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './ChatBuddyDetail.module.css';

import ProfileBadge from '../ProfileBadge/ProfileBadge';

/**
 * ChatBuddyDetail component displays the name of the buddy and the courses they share.
 * commonCourses is an array of objects with courseName and courseLink properties.
 * Example:
 *  {
 *    courseName: 'SOFTENG 701',
 *    courseLink: 'https://random.link',
 *  }
 */
function ChatBuddyDetail({ active, name, removeBuddy, commonCourses }) {
  return (
    <Box className={styles.container}>
      <ProfileBadge active={active} name={name} />
      <Typography fontWeight={600} variant="h5">
        {name}
      </Typography>
      {active && <Typography className={styles.activeText}> Active now</Typography>}
      <Button
        className={styles.removeButton}
        color="primaryDark"
        variant="outlined"
        data-testid="remove-buddy"
        onClick={removeBuddy}
      >
        Remove Buddy
      </Button>
      <Typography className={styles.commonCourseTitle}>Common Courses</Typography>
      {commonCourses.map(({ courseName, courseLink }) => (
        <Typography className={styles.commonCourseText} key={courseName + courseLink}>
          {courseName}
        </Typography>
      ))}
    </Box>
  );
}

ChatBuddyDetail.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  removeBuddy: PropTypes.func.isRequired,
  commonCourses: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      courseLink: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ChatBuddyDetail.defaultProps = {
  active: false,
};

export default ChatBuddyDetail;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styles from './BuddyCard.module.css';

/**
 * This component is intended to be displayed inside the CoursesPageCard and displays the buddy name.
 * The component takes in two optional props. Conditional rendering of this component is done based
 * on whether or not the props are passed in.
 *
 */

export default function BuddyCard({ buddyName, courseName }) {
  if (!buddyName) {
    return (
      <Card className={styles.cardContainer}>
        <CardContent>
          <Typography variant="body">You dont have any buddies in this course yet</Typography>
        </CardContent>
        <CardActions>
          <Button size="Large" variant="outlined" color="inherit" className={styles.button}>
            Find a buddy
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card className={styles.cardContainer}>
      <CardContent className={styles.cardContent}>
        <AccountCircleRoundedIcon />
        <Typography variant="body">{buddyName}</Typography>
        <Typography variant="subtitle">Also takes {courseName}</Typography>
      </CardContent>
    </Card>
  );
}

BuddyCard.propTypes = {
  buddyName: PropTypes.string,
  courseName: PropTypes.string,
};

BuddyCard.defaultProps = {
  buddyName: '',
  courseName: '',
};

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuddyCard from './BuddyCard';
import styles from './CoursesPageCard.module.css';

/**
 * This component can display one courses card on the timetable page. It is intended to be displayed
 *  after timetable upload. The child component buddy card can be instantiated as required to
 *  display the buddy details for the course. See BuddyCard.jsx for more details
 *
 * TODO:
 * Currently this component only displays a single buddy card, with a course name and buddy name.
 * This needs to be extended to take in a list of course names and their corresponding buddies in
 * that course. The map function can be used to then map these props to the buddy card component
 * as required
 */

export default function CoursesPageCard() {
  return (
    <Card className={styles.cardContainer}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5">Softeng750</Typography>
        <BuddyCard buddyName="Example idk" courseName="SE750" />
      </CardContent>
      <CardActions>
        <Button size="Large" color="warning" variant="outlined" className={styles.button}>
          Remove Course
        </Button>
      </CardActions>
    </Card>
  );
}

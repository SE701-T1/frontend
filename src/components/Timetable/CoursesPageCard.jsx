import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuddyCard from './BuddyCard';
import styles from './CoursesPageCard.module.css';

export default function CoursesPageCard() {
  return (
    <Card className={styles.cardContainer}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5">Softeng750</Typography>
        <BuddyCard />
      </CardContent>
      <CardActions>
        <Button size="Large" color="warning" variant="outlined" className={styles.button}>
          Remove Course
        </Button>
      </CardActions>
    </Card>
  );
}

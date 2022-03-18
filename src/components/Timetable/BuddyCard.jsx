import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './BuddyCard.module.css';

export default function BuddyCard() {
  return (
    <Card className={styles.cardContainer}>
      <CardContent>
        <Typography variant="body">You dont have any buddies in this course yet</Typography>
      </CardContent>
      <CardActions>
        <Button size="Large" variant="outlined" className={styles.button}>
          Find a buddy
        </Button>
      </CardActions>
    </Card>
  );
}

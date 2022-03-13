import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

import styles from './CourseCard.module.css';

function CourseCard({ courseName, semesterNumber, numbOfStudents, numOfBuddies }) {
  const year = new Date().getFullYear();
  const [selected, setSelected] = useState(true);

  const cardContent = (
    <CardContent>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography className={styles.courseNameText} variant="h4" fontWeight={550}>
            {courseName}
          </Typography>
          <Typography className={styles.semesterText} fontSize={14}>
            SEMESTER {semesterNumber} {year}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <PersonIcon className={styles.icons} />
            </Grid>
            <Grid item>
              <Typography alignItems="end" variant="subtitle2">
                <strong>{numbOfStudents} Members</strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <GroupsIcon className={styles.icons} />
            </Grid>
            <Grid item>
              <Typography alignItems="end" variant="subtitle2">
                <strong>{numOfBuddies} Buddies</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  );

  console.log(selected);
  return (
    <Box>
      <Card className={styles.root}>
        <CardActionArea onClick={() => setSelected(!selected)}>{cardContent}</CardActionArea>
      </Card>
    </Box>
  );
}

export default CourseCard;

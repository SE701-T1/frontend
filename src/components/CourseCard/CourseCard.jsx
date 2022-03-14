import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import styles from './CourseCard.module.css';

const SelectedCard = styled(Card)(() => ({
  // border: '4px solid #8896ac',
  boxShadow: '0px 0px 0px 4.5px #8896ac inset',
  borderRadius: '15px',

  position: 'relative',
  '&::before,&::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  '&::before': {
    borderWidth: '4px',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
  '&::after': {
    borderRadius: '0%',
    borderWidth: '30px',
    borderRightColor: '#8896ac' /* color of the triangle */,
    borderTopColor: '#8896ac' /* color of the triangle */,
  },
}));

const StyledCard = styled(Card)(() => ({
  borderRadius: '15px',
}));

function CourseCard({ courseName, semesterNumber, numbOfStudents, numOfBuddies }) {
  const year = new Date().getFullYear();
  const [selected, setSelected] = useState(false);

  const cardContent = (
    <CardContent className={styles.cardContent}>
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <Typography className={styles.courseNameText} variant="h4" fontWeight={550}>
            {courseName}
          </Typography>
          <Typography className={styles.semesterText} fontSize={14}>
            SEMESTER {semesterNumber} {year}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="baseline"
        spacing={1}
        className={styles.memberNBuddiesText}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <PersonIcon className={styles.icons} />
            </Grid>
            <Grid item>
              <GroupsIcon className={styles.icons} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="flex-end">
            <Grid item>
              <Typography variant="subtitle2" className={styles.text} align="right">
                <strong>{numbOfStudents}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" className={styles.text} align="right">
                <strong>{numOfBuddies}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle2" className={styles.text}>
                <strong>Members</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" className={styles.text}>
                <strong>Buddies</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <PersonIcon className={styles.icons} />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item justifyContent="end">
                  <Typography alignItems="end" variant="subtitle2">
                    <strong>{numbOfStudents}</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography alignItems="end" variant="subtitle2">
                    <strong>Members</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <GroupsIcon className={styles.icons} />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item justifyContent="end">
                  <Typography alignItems="end" variant="subtitle2">
                    <strong>{numOfBuddies}</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography alignItems="end" variant="subtitle2">
                    <strong>Buddies</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
    </CardContent>
  );

  return (
    <Box className={styles.root}>
      {selected ? (
        <Box className={styles.root} onClick={() => setSelected(!selected)}>
          <SelectedCard className={styles.card}>
            <CardActionArea>{cardContent}</CardActionArea>
          </SelectedCard>
          <CheckCircleOutlinedIcon data-testid="tickIcon" className={styles.tickIcon} />
        </Box>
      ) : (
        <StyledCard className={styles.card}>
          <CardActionArea onClick={() => setSelected(!selected)}>{cardContent}</CardActionArea>
        </StyledCard>
      )}
    </Box>
  );
}

export default CourseCard;

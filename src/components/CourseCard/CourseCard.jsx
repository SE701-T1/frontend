import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import PropTypes from 'prop-types';

import styles from './CourseCard.module.css';

const SelectedCard = styled(Card)(() => ({
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
    borderRightColor: '#8896ac',
    borderTopColor: '#8896ac',
  },
}));

const StyledCard = styled(Card)(() => ({
  borderRadius: '15px',
}));

function CourseCard({ courseName, semesterNumber, numbOfStudents, numOfBuddies, onClick }) {

  const [selected, setSelected] = useState(false);

  const cardContent = (
    <CardContent className={styles.cardContent}>
      <Grid container direction="row" spacing={3} className={styles.cardList}>
        <Grid item>
          <Typography variant="h5" fontWeight={550} className={styles.title}>
            {courseName}
          </Typography>
          <Typography className={styles.semesterText} fontSize={14}>
            {semesterNumber}
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
            {/* <Grid item>
              <GroupsIcon className={styles.icons} />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="flex-center">
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
      </Grid>
      <div className={styles.removeButton}>
        <div
           className={styles.button}
           color="primaryDark"
           variant="outlined"
           data-testid="remove-buddy">
             Remove Button
           </div>
       </div>
    </CardContent>
  );

  return (
    <Box className={styles.root} onClick={onClick}>
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

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  semesterNumber: PropTypes.string.isRequired,
  numbOfStudents: PropTypes.number.isRequired,
  numOfBuddies: PropTypes.number.isRequired,
};

export default CourseCard;
import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CourseCard from '../../components/CourseCard/CourseCard';

import styles from './Pairing.module.css';

const data = [
  {
    courseId: 0,
    name: 'Softeng 701',
    semester: 1,
    studentCount: 10,
    buddyCount: 0,
  },
  {
    courseId: 1,
    name: 'Softeng 750',
    semester: 1,
    studentCount: 9,
    buddyCount: 5,
  },
  {
    courseId: 2,
    name: 'Softeng 764',
    semester: 2,
    studentCount: 60,
    buddyCount: 50,
  },
  {
    courseId: 3,
    name: 'Softeng 731',
    semester: 2,
    studentCount: 10,
    buddyCount: 0,
  },
  {
    courseId: 4,
    name: 'Softeng 711',
    semester: 2,
    studentCount: 10,
    buddyCount: 100,
  },
];

const StyledButton = styled(Button)(() => ({
  '&.MuiButton-root': {
    border: '2px #666666 solid',
  },
  '&.MuiButton-text': {
    color: '#666666',
  },
  '&.MuiButton-outlined': {
    color: '#666666',
  },
}));

function Pairing() {
  const [numOfSelectedCourses, setNumOfSelectedCourses] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectedCourse = (courseName) => {
    const numberOfCourse = selectedCourses.length;
    const filteredSelectedCourse = selectedCourses.filter((value) => courseName !== value);

    if (filteredSelectedCourse.length === numberOfCourse) {
      setSelectedCourses([...filteredSelectedCourse, courseName]);
      setNumOfSelectedCourses(numOfSelectedCourses + 1);
    } else {
      setSelectedCourses(filteredSelectedCourse);
      setNumOfSelectedCourses(numOfSelectedCourses - 1);
    }
  };

  const handleFindBuddy = () => {
    console.log(selectedCourses);
  };

  const header = (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Typography>
              <strong>{numOfSelectedCourses} Courses Selected </strong>
            </Typography>
          </Grid>
          <Grid item>
            <CheckCircleOutlinedIcon />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <StyledButton
          variant="outlined"
          color="primaryDark"
          className={styles.button}
          onClick={() => handleFindBuddy()}>
          <Typography color="primaryDark">FIND MY BUDDY</Typography>
          <ArrowForwardIcon />
        </StyledButton>
      </Grid>
    </Grid>
  );

  return (
    <Container>
      <Grid container direction="column" spacing={3}>
        <Grid xs={12} sm={12} md={6} item>
          {header}
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between">
            {data.map(({ courseId, name, semester, studentCount, buddyCount }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={courseId}
                className={styles.card}
                onClick={() => handleSelectedCourse(name)}>
                <CourseCard
                  key={courseId}
                  courseName={name}
                  semesterNumber={semester}
                  numbOfStudents={studentCount}
                  numOfBuddies={buddyCount}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pairing;

import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useNavigate } from 'react-router-dom';

import CourseCard from '../../components/CourseCard/CourseCard';
import styles from './Pairing.module.css';
import { getCourses, getUserCourses } from '../../api/TimetableAPI';
import { findPairing } from '../../api/PairingAPI';
import PopUp from '../../components/PopUp/PopUp';
import { addBuddy } from '../../api/UserAPI';
import { ChatContext } from '../../context/ChatContext';

const StyledButton = styled(Button)(() => ({
  '&.MuiButton-root': {
    border: '2px #666666 solid',
  },
  '&.MuiButton-outlined': {
    color: '#666666',
  },
}));

function Pairing() {
  const navigate = useNavigate();
  const { getChatList } = useContext(ChatContext);
  const [numOfSelectedCourses, setNumOfSelectedCourses] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [buddies, setBuddies] = useState([]);
  const [buddy, setBuddy] = useState({
    userId: 0,
    name: '',
    sharedCourses: [],
    buddyNumber: 0,
  });

  /**
   * If the course is not selected, add to the selectedCourses list.
   * If the course is selected, remove from the list.
   * @param {*} courseId
   */
  const handleSelectedCourse = (courseId) => {
    const numberOfCourse = selectedCourses.length;
    const filteredSelectedCourse = selectedCourses.filter((value) => courseId !== value);

    if (filteredSelectedCourse.length === numberOfCourse) {
      setSelectedCourses([...filteredSelectedCourse, courseId]);
      const prev = numOfSelectedCourses;
      setNumOfSelectedCourses(prev + 1);
    } else {
      setSelectedCourses(filteredSelectedCourse);
      const prev = numOfSelectedCourses;
      setNumOfSelectedCourses(prev - 1);
    }
  };

  /**
   * Send selected course to popup componenet
   */
  const handleFindBuddy = async () => {
    try {
      const pairing = await findPairing(selectedCourses);
      setBuddies(pairing);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * handleNextBuddy to get next buddy
   */
  const handleNextBuddy = () => {
    setBuddies((prev) => prev.slice(1));
  };

  /**
   * handleOnChat to open chat
   */
  const handleOnChat = async (userId) => {
    try {
      await addBuddy(userId);
      getChatList();
      navigate('/chat');
    } catch (e) {
      console.error(e);
      setBuddies([]);
    }
  };

  /**
   * Fetch course timetable
   */
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getCourses();
      setCourses(response);
    };

    fetchCourses();
  }, []);

  /**
   * Fetch next buddy from the list
   */
  useEffect(() => {
    const setup = async () => {
      if (buddies == null || buddies.length === 0) {
        return;
      }

      const userCourses = await getUserCourses(buddies[0].id);

      const sharedCourses = userCourses
        .filter((course) => courses.map((c) => c.courseId).includes(course.courseId))
        .map((course) => course.name);

      setBuddy({
        userId: buddies[0].id,
        name: buddies[0].name,
        sharedCourses,
        buddyNumber: buddies[0].buddyCount,
      });
    };
    setup();
  }, [buddies]);

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
          disabled={numOfSelectedCourses === 0}
          variant="outlined"
          onClick={() => handleFindBuddy()}
        >
          <Typography color="primaryDark">FIND MY BUDDY</Typography>
          <ArrowForwardIcon />
        </StyledButton>
      </Grid>
    </Grid>
  );

  return (
    <Container>
      <PopUp
        name={buddy.name}
        buddyNumber={buddy.buddyNumber}
        sharedCourses={buddy.sharedCourses}
        open={buddies.length !== 0}
        size={128}
        onClose={() => setBuddies([])}
        onChat={() => handleOnChat(buddy.userId)}
        onNext={() => handleNextBuddy()}
      />
      <Grid container direction="column" spacing={3}>
        <Grid xs={12} sm={12} md={6} item>
          {header}
        </Grid>
        <Grid item>
          <Grid container>
            {courses.map(({ courseId, name, semester, studentCount, buddyCount }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                col={4}
                key={courseId}
                className={styles.card}
                onClick={() => handleSelectedCourse(courseId)}
              >
                <CourseCard
                  key={courseId}
                  courseName={name}
                  semesterNumber={semester}
                  numbOfStudents={studentCount}
                  numOfBuddies={buddyCount || 0}
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

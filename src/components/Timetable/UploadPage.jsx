import React from 'react';
import {
  Button,
  Stack,
  Typography,
  TextField,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import styles from './UploadPage.module.css';

/**
 * This component can be used to display the upload page for the app after the user has logged in.
 * Users can input their timetable details into this page. Currenly the page is not functional.
 * This component takes in a function as a prop that should handle the behaviour of a user clicking on the submit button.
 *
 */
export default function UploadPage({ sendTimetableURL, userID }) {
  const [calendarURL, setcalendarURL] = React.useState('');
  const handleChange = (event) => {
    setcalendarURL(event.target.value);
  };
  const handleSubmit = () => {
    sendTimetableURL(calendarURL, userID);
  };

  return (
    <Stack direction="column" spacing={3} className={styles.title}>
      <Button variant="contained" onClick={handleSubmit}>
        Upload Timetable
      </Button>
      <Typography>OR</Typography>
      <TextField
        id="outlined-input"
        aria-label="Enter URL"
        label="Enter your calendar URL"
        value={calendarURL}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" aria-label="submit" onClick={handleSubmit}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Link
        href="https://uoacal.auckland.ac.nz/home"
        underline="hover"
        target="_blank"
        rel="noopener noreferrer">
        <Typography>Download your timetable at https://uoacal.auckland.ac.nz/home</Typography>
      </Link>
    </Stack>
  );
}

UploadPage.propTypes = {
  sendTimetableURL: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

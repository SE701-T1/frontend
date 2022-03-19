import React, { useState } from 'react';
import {
  Button,
  Stack,
  Typography,
  TextField,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import styles from './UploadPage.module.css';
import { uploadTimetableURL } from '../../api/TimetableAPI';

/**
 * This component can be used to display the upload page for the app after the user has logged in.
 * Users can input their timetable details into this page. Currenly the page is not functional.
 * This component takes in a function as a prop that should handle the behaviour of a user clicking on the submit button.
 *
 */
export default function UploadPage() {
  const [calendarURL, setCalendarURL] = useState('');
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCalendarURL(event.target.value);
  };
  const handleSubmit = () => {
    const upload = async () => {
      try {
        await uploadTimetableURL(calendarURL);
        navigate('/find-matches');
      } catch (err) {
        setCalendarURL('');
        setDisable(false);
      }
    };
    setDisable(true);
    upload();
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
        disabled={disable}
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

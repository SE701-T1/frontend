import React from 'react';
import { Button, Stack, Typography, TextField, Link } from '@mui/material';
import styles from './UploadPage.module.css';

/**
 * This component can be used to display the upload page for the app after the user has logged in.
 * Users can input their timetable details into this page. Currenly the page is not functional.
 *
 */
export default function UploadPage() {
  const [calendarURL, setcalendarURL] = React.useState('');
  const handleChange = (event) => {
    setcalendarURL(event.target.value);
  };

  return (
    <Stack direction="column" spacing={3} className={styles.title}>
      <Button variant="contained">Upload Timetable</Button>
      <Typography>OR</Typography>
      <TextField
        id="outlined-input"
        label="Enter your calendar URL"
        value={calendarURL}
        onChange={handleChange}
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

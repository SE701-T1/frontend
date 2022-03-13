import React from 'react';
import { Button, Stack, Typography, TextField, Link } from '@mui/material';
import styles from './UploadPage.module.css';

/**
 * This component can be used to display the upload page for the app after the user has logged in.
 * Users can input their timetable details into this page. Currenly the page is not functional.
 *
 */
export default function UploadPage() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Stack direction="column" spacing={4} className={styles.title}>
      <Button variant="contained">Upload Timetable</Button>
      <Typography>OR</Typography>
      <TextField
        id="outlined-input"
        label="Enter your calendar URL"
        value={name}
        onChange={handleChange}
      />
      <Link href="https://uoacal.auckland.ac.nz/home" underline="hover">
        <Typography>Download your timetable at https://uoacal.auckland.ac.nz/home</Typography>
      </Link>
    </Stack>
  );
}

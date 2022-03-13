import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import styles from './UploadPage.module.css';

/**
 * This component can be used to display the upload page for the app after the user has logged in.
 * Users can input their timetable details into this page. Currenly the page is not functional.
 *
 */
export default function UploadPage() {
  // Setting the first page as the initial active page.

  return (
    <Stack direction="column" spacing={2} className={styles.title}>
      <Button variant="contained">Upload Timetable</Button>
      <Typography>This is an example component.</Typography>
    </Stack>
  );
}

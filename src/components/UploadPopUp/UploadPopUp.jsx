import React from 'react';
import { Button, Dialog } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
import styles from './UploadPopUp.module.css';

export default function UploadPopUp({ open, close }) {
  return (
    <Dialog open={open} fullWidth>
      <div className={styles.title}>
        <h1> Upload Timetable</h1>
        <DropzoneArea
          acceptedFiles={['image/*', 'video/*', 'application/*']}
          showFileNames
          dropzoneText="Drop or upload file here"
          showAlerts={false}
          filesLimit={20}
        />
      </div>
      <div className={styles['upload-button']}>
        <Button
          variant="contained"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}
          onClick={close}>
          Upload
        </Button>
      </div>
      <div className={styles['close-button']}>
        <Button
          variant="outlined"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}
          onClick={close}>
          Close
        </Button>
      </div>
    </Dialog>
  );
}

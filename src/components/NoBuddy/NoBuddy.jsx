import React from 'react';
import { Button, Dialog } from '@mui/material';

import styles from './NoBuddy.module.css';

export default function NoBuddy({ open, close }) {
  return (
    <Dialog open={open} fullWidth data-testid="popup">
      <div className={styles.title}>
        <h1> No more buddies found</h1>
      </div>
      <div className={styles.title}>
        <h1> :(</h1>
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

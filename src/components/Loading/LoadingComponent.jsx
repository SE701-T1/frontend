import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Loading.module.css';

function LoadingComponent() {
  return (
    <div className={styles.loading}>
      <CircularProgress data-testid="loading" />
    </div>
  );
}

export default LoadingComponent;

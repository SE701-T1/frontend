import React from 'react';
import { Typography } from '@mui/material';
import styles from './Page.module.css';

/**
 * This is a pure (no state) component which is used by the Carousel to display information on
 * each page.
 */
export default function Page({ title, description }) {
  return (
    <div>
      <Typography className={styles.title} variant="h5">
        {title}
      </Typography>
      <Typography className={styles.description} variant="subtitle2" mt={1}>
        {description}
      </Typography>
    </div>
  );
}

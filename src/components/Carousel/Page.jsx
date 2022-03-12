import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import styles from './Page.module.css';

export default function Page({ title, description }) {
    return (
        <div>
            <Typography className={styles.title} variant='h5'>{title}</Typography>
            <Typography className={styles.description} variant='subtitle2' mt={1}>{description}</Typography>
        </div>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
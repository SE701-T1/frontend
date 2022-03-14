import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function LoadingComponent() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh'
    }}>
      <CircularProgress data-testid="loading"/>
    </div>
  );
}

export default LoadingComponent;
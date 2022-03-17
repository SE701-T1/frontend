import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from './Settings.module.css'

export default function Settings() {
  const [pairing, setPairing] = React.useState('off');

  const handleChange = (event, newPairing) => {
    setPairing(newPairing);
    console.log(newPairing);
  };

  return (
    <ToggleButtonGroup
      value={pairing}
      exclusive
      onChange={handleChange} 
    >
      <span className={`${styles.pairing}`} >Pairing: </span>
      <ToggleButton value="on">On</ToggleButton>
      <ToggleButton value="off">Off</ToggleButton>
    </ToggleButtonGroup>
  );
}
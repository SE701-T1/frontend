import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from './Settings.module.css'

/**
 * The settings page displays a toggle button that the user can click on.If the off option is selected, 
 * then value of newPairing value is set to "off" and it set to "on" otherwise.
 * 
 * Default value of pairing will be set to on.
 * 
 * More information about the toggle button can be found here: https://mui.com/components/toggle-button/
 * 
 */

export default function Settings() {
  const [pairing, setPairing] = React.useState('on');

  const handleChange = (event, newPairing) => {
    setPairing(newPairing);
  };

  return (
    <ToggleButtonGroup
      className={`${styles.container}`}
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
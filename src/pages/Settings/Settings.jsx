/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import styles from './Settings.module.css';
import { getSelf, updateUser } from '../../api/UserAPI';

/**
 * The settings page displays a toggle button that the user can click on to enable or disable pairing.
 *  If the off option is selected, then the value of newPairing value is set to "off" and it is set to "on" otherwise.
 *
 * Default value of pairing will be set to on.
 *
 * More information about the toggle button can be found here: https://mui.com/components/toggle-button/
 *
 */

export default function Settings() {
  const [pairingEnabled, setPairingEnabled] = useState();

  useEffect(async () => {
    const userInfo = await getSelf();
    setPairingEnabled(userInfo.pairingEnabled);
  }, []);

  const handleChange = async (event, pairingStatus) => {
    if (pairingStatus !== null) {
      setPairingEnabled(pairingStatus);
      await updateUser(pairingStatus);
    }
  };

  return (
    <>
      <Typography sx={{ marginRight: '10px', display: 'inline' }} variant="body1">
        Pairing Mode:
      </Typography>
      <ToggleButtonGroup
        className={`${styles.container}`}
        value={pairingEnabled}
        exclusive
        onChange={handleChange}>
        <ToggleButton value={true}>On</ToggleButton>
        <ToggleButton value={false}>Off</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

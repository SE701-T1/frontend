import React from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import CallIcon from '@mui/icons-material/Call';
import ProfileBadge from '../ProfileBadge/ProfileBadge';
import styles from './ChatHeader.module.css';

/**
 * ChatHeader component displays the avatar, name and a status of the buddy the current
 * user in the current conversation.
 * A call button will allow user to give a call to this buddy.
 */
function ChatHeader({ active, name, callBuddy }) {
  return (
    <Box className={styles.chatHeader}>
      <Box className={styles.userDetails}>
        <ProfileBadge active={active} name={name} />
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            lineHeight={1}
            className={`${styles.headerText} ${
              active ? styles.onlinePadding : styles.offlinePadding
            }`}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={500}
            lineHeight={1.5}
            className={`${styles.headerText} ${styles.status}`}>
            {active ? 'Active now' : ' '}
          </Typography>
        </Box>
      </Box>
      <IconButton onClick={callBuddy} data-testid="call-buddy">
        <CallIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

ChatHeader.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  callBuddy: PropTypes.func.isRequired,
};

ChatHeader.defaultProps = {
  active: true,
};

export default ChatHeader;

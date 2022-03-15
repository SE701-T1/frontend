import React from 'react';
import { IconButton } from '@mui/material';
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
    <div className={styles.chatHeader}>
      <div className={styles.userDetails}>
        <ProfileBadge active={active} name={name} />
        <div className={styles.detailsText}>
          <p
            className={`${styles.headerText} ${styles.buddyName} ${
              active ? styles.onlinePadding : styles.offlinePadding
            }`}>
            {name}
          </p>
          <p className={`${styles.headerText} ${styles.status}`}>{active ? 'Active now' : ' '}</p>
        </div>
      </div>
      <IconButton onClick={callBuddy} data-testid="call-buddy">
        <CallIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

ChatHeader.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  callBuddy: PropTypes.func.isRequired,
};

ChatHeader.defaultProps = {
  active: false,
};

export default ChatHeader;

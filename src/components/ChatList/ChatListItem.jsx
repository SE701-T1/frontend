import React from 'react';
import {Typography} from "@mui/material";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import styles from './ChatListItem.module.css';

function ChatItemList({name, active, lastMessageText, lastMessageTime, selected}) {

  function timeSince(date) {

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return `${Math.floor(interval)} y`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)} m`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)} d`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)} h`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)} m`;
    }
    return `${Math.floor(seconds)} s`;
  }

  return (
    <div className={`${styles.container} ${selected && styles.selected}`}>
      <div style={{flex: 0, paddingLeft: "8px", paddingRight: "10px"}}>
        <ProfileBadge active={active} name={name}/>
      </div>
      <div style={{flex: 1, textAlign: "start", paddingLeft: "5px"}}>
        <div>
          <Typography variant="h6" fontWeight="600"
                      style={{display: "flex", alignItems: "flex-end"}}>{name}</Typography>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between"}}>
          <Typography color="#959595" variant="subtitle2">{lastMessageText}</Typography>
          <Typography color="#959595" variant="subtitle2">• {timeSince(lastMessageTime)}</Typography>
        </div>
      </div>
    </div>)
}

export default ChatItemList;
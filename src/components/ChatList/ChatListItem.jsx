import React, {useState} from 'react';
import {ButtonBase, Typography} from "@mui/material";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import styles from './ChatListItem.module.css';
import timeSince from "../../Util/TimeFormater";

function ChatItemList({name, active, lastMessageText, lastMessageTime, onClick}) {
  const [selected, setSelected] = useState(false);

  function onContainerClick() {
    setSelected(!selected);

    if (onClick !== undefined) {
      onClick();
    }
  }

  return (
    <ButtonBase style={{background: selected ? "#ECF3FF" : "#FFFFFF", padding: "5px", borderRadius: "5px"}} className={`${styles.container}`}
                onClick={() => onContainerClick()}>
      <div className={`${styles.profileBadgeContainer}`}>
        <ProfileBadge active={active} name={name}/>
      </div>
      <div className={`${styles.textContainer}`}>
        <div>
          <Typography variant="h6" fontWeight="600" lineHeight="normal"
                      className={`${styles.headerText}`}>{name}</Typography>
        </div>
        <div className={`${styles.subText}`}>
          <Typography color="#959595" variant="subtitle2" lineHeight="normal">{lastMessageText}</Typography>
          <Typography color="#959595" variant="subtitle2" lineHeight="normal">• {timeSince(lastMessageTime)}</Typography>
        </div>
      </div>
    </ButtonBase>)
}

export default ChatItemList;
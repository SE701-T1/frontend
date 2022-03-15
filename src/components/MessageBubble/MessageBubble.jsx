import React from 'react';
import PropTypes from "prop-types";
import styles from  './MessageBubble.module.css';

function MessageBubble({ text, senderAvatar, sender, currentUser, contentType }) {
    let content = null
    let bubbleType = null

    const { bubbleSender, messageDirection } = sender === currentUser
        ? { bubbleSender: styles.me, messageDirection: styles["bubble-from-right"] }
        : { bubbleSender: styles.others, messageDirection: styles["bubble-from-left"] }

    if (contentType === "image") {
        bubbleType = styles["bubble-img"]
        content = <img className={styles["content-img"]} alt="imageMessage" src={senderAvatar} />
    }
    else {
        content = text
        bubbleType = styles["bubble-text"]
    }

    return (
        bubbleSender === styles.others ?
            <div className={`${styles["message-container"]} ${messageDirection}`}>
                <img className= {styles["avatar-img"]} alt="avatar" src={senderAvatar} />
                <div className={`${styles.bubble} ${bubbleSender} ${bubbleType}`}>{content}</div>
            </div> : <div className={`${styles["message-container"]} ${messageDirection}`}>
                <div className={`${styles.bubble} ${bubbleSender} ${bubbleType}`}>{content}</div>
            </div>
    );
}

MessageBubble.propTypes = {
    text: PropTypes.string.isRequired,
    senderAvatar: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    currentUser: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
};


export default MessageBubble; 
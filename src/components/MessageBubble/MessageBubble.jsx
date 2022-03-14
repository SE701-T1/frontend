import React from 'react';
import PropTypes from "prop-types";
import './MessageBubble.css';


function MessageBubble({ text, senderAvatar, sender, currentUser, contentType }) {
    let content = null
    let bubbleType = null

    const { bubbleSender, messageDirection } = sender === currentUser
        ? { bubbleSender: "me", messageDirection: "bubble-from-right" }
        : { bubbleSender: "others", messageDirection: "bubble-from-left" }

    if (contentType === "image") {
        bubbleType = "bubble-img"
        content = <img className="content-img" alt="imageMessage" src={senderAvatar} />
    }
    else {
        content = text
        bubbleType = "bubble-text"
    }

    return (
        bubbleSender === 'others' ?
            <div className={`message-container ${messageDirection}`}>
                <img className="avatar-img" alt="avatar" src={senderAvatar} />
                <div className={`bubble ${bubbleSender} ${bubbleType}`}>{content}</div>
            </div> : <div className={`message-container ${messageDirection}`}>
                <div className={`bubble ${bubbleSender} ${bubbleType}`}>{content}</div>
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
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DialoguesList.module.css';
import MessageBubble from '../MessageBubble/MessageBubble';

// TODO: display the timestamp of messages

/**
 * DialoguesList component displays messages in the form of MessageBubbles between users.
 * This component takes in an array of objects (messages) which contain properties sender id, text,
 * and content type.
 * Example:
 *  {
 *   sender: 'id3333',
 *   text: 'hello there',
 *   contentType: 'text',
 *  }
 */

function DialoguesList({ messages, currentUser, senderAvatar }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // scroll to bottom when a new message comes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // render the message bubbles from the messages prop
  return (
    <div className={styles.root}>
      {messages.map(({ text, sender, contentType }, key) => (
        <MessageBubble
          text={text}
          sender={sender}
          currentUser={currentUser}
          senderAvatar={senderAvatar}
          contentType={contentType}
          // eslint-disable-next-line react/no-array-index-key
          key={key}
        />
      ))}
      <div className={styles.bottom} ref={messagesEndRef} />
    </div>
  );
}

DialoguesList.propTypes = {
  currentUser: PropTypes.string.isRequired,
  senderAvatar: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DialoguesList;

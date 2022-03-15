/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import styles from './DialoguesList.module.css';

export default function DialoguesList({ messages }) {
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.root}>
      {messages.map((component, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={key}>{component}</div>
      ))}
      <div className={styles.bottom} ref={messagesEndRef} />
    </div>
  );
}

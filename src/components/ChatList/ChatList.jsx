import React from 'react';
import PropTypes from 'prop-types';
import ChatListItem from './ChatListItem';
import styles from './ChatList.module.css';

function ChatList({ chatId, chatItems, onChatItemClick }) {
  return (
    <div>
      {chatItems.map((chatItem) => (
        <div key={chatItem.id} className={styles.itemContainer}>
          <ChatListItem
            name={chatItem.name}
            selected={chatId === chatItem.userId}
            active={chatItem.active}
            lastMessageText={chatItem.lastMessage ?? ''}
            lastMessageTime={chatItem.timestamp}
            onClick={() => onChatItemClick(chatItem.userId)}
          />
        </div>
      ))}
    </div>
  );
}

ChatList.propTypes = {
  chatItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastMessage: PropTypes.string.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};

export default ChatList;

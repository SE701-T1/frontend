import React from 'react';
import PropTypes from 'prop-types';
import ChatListItem from './ChatListItem';
import styles from './ChatList.module.css';

/**
 * ChatList is the component that handles the list of chats.
 * This component display each user with their last message and the date of the last message.
 * The user can click on the user to open the chat.
 */
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
            lastMessageTime={chatItem.timestamp ?? new Date()}
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
      lastMessage: PropTypes.string,
      timestamp: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};

export default ChatList;

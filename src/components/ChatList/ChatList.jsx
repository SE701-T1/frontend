import React from 'react';
import PropTypes from 'prop-types';
import ChatListItem from "./ChatListItem";
import styles from './ChatList.module.css';

function ChatList({chatItems}) {

  return (
  
  <div>
    {chatItems.map(chatItem => <div key={chatItem.id} className={styles.itemContainer}>
      <ChatListItem name={chatItem.name}
                    active={chatItem.active}
                    lastMessageText={chatItem.lastMessage}
                    lastMessageTime={chatItem.lastMessageTime}
                    onClick={() => console.log(chatItem.id)}/>
    </div>)}
  </div>);
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
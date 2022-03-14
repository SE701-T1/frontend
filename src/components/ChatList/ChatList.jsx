import React from 'react';
import ChatListItem from "./ChatListItem";
import styles from './ChatList.module.css';

function ChatList() {
  const chatItems = [{
    id: 1,
    name: 'Hiruna Smith',
    lastMessage: 'Yay Lets be buddies',
    lastMessageTime: new Date("2022-03-07T00:00:00.000Z"),
    active: true
  }, {
    id: 2,
    name: 'Chat 2',
    lastMessage: 'Last message',
    lastMessageTime: new Date("2022-03-14T04:00:00.000Z"),
    active: false
  }, {
    id: 3,
    name: 'Chat 3',
    lastMessage: 'Last message',
    lastMessageTime: new Date("2022-03-04T00:00:00.000Z"),
    active: false
  }];

  return (<div>
    {chatItems.map(chatItem => <div key={chatItem.id} className={`${styles.itemContainer}`}>
      <ChatListItem name={chatItem.name}
                    active={chatItem.active}
                    lastMessageText={chatItem.lastMessage}
                    lastMessageTime={chatItem.lastMessageTime}
                    onClick={() => console.log(chatItem.id)}/>
    </div>)}
  </div>);
}

export default ChatList;
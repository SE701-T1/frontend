import React from 'react';
import ChatListItem from "./ChatListItem";

function ChatList() {
  return <ChatListItem name="Hiruna Smith" active lastMessageText="Yay Lets be buddies" lastMessageTime={Date.now()} selected/>
}

export default ChatList;
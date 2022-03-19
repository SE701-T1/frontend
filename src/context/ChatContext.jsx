/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import getMessages from '../api/CommunicationAPI';
import { SocketContext } from '../api/sockets/Sockets';

export const ChatContext = React.createContext({});

export function ChatContextProvider({ children }) {
  const { connected, onMessageEvent, onOnlineEvent } = useContext(SocketContext);
  const [chatList, setChatList] = useState([]);
  const [chatUserId, setChatUserId] = useState();
  const [messages, setMessages] = useState([]);

  const updateChatList = (userId, { lastMessage, timestamp }) => {
    const newChatList = chatList
      .map((chat) =>
        chat.userId === userId
          ? {
              ...chat,
              lastMessage,
              timestamp,
            }
          : chat,
      )
      .sort((a, b) => a.timestamp > b.timestamp);

    setChatList(newChatList);
  };

  useEffect(() => {
    console.log('SocketIO - connection: ', connected);
    if (!connected) {
      return;
    }

    onMessageEvent((message) => {
      console.log(message);
    });

    onOnlineEvent((userIds) => {
      console.log(userIds);
    });
  }, [connected]);

  const updateMessages = async (userId) => {
    const newMessages = await getMessages(userId);
    setMessages(newMessages);
  };

  const setChat = (userId) => {
    setChatUserId(userId);
    setMessages([]);
    updateMessages(userId);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    // values
    chatUserId,
    chatList,
    messages,
    // function
    updateChatList,
    setChat,
  };

  return <ChatContext.Provider value={context}>{children}</ChatContext.Provider>;
}

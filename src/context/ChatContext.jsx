/* eslint-disable no-console */
import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getMessages, getBuddyChatList } from '../api/CommunicationAPI';
import { SocketContext } from '../api/sockets/Sockets';
import { getSelf, getUser } from '../api/UserAPI';
import { AuthContext } from './AuthContext';

export const ChatContext = createContext({});

export function ChatContextProvider({ children }) {
  const { jwt } = useContext(AuthContext);
  const { connected, onMessageEvent, onOnlineEvent } = useContext(SocketContext);
  const [currentChat, setCurrentChat] = useState({
    userId: null,
    buddyName: 'Loading',
    buddyActive: false,
    buddyId: null,
  });
  const [searchResult, setSearchResult] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isActive, setIsActive] = useState({});

  // Handle filter search here
  const handleSearch = (search) => {
    if (search.length === 0) {
      setSearchResult(chatList);
    }
    const filtered = chatList.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

    setSearchResult(filtered);
  };

  // Update ChatList when a buddy sends a message
  const updateChatList = (userId, { lastMessage, timestamp }) => {
    setChatList((prevState) => {
      const prev = prevState
        ?.map((chat) =>
          chat.userId === userId
            ? {
                ...chat,
                lastMessage,
                timestamp,
              }
            : chat,
        )
        .sort((a, b) => a.timestamp > b.timestamp);
      setSearchResult(prev);
      return prev;
    });
  };

  // Check if userId is online
  const isOnline = (userId) => isActive[userId] ?? false;

  // Fetch message History
  const updateMessages = async (userId) => {
    const newMessages = await getMessages(userId);
    setMessages(newMessages);
  };

  // Change chat
  const selectChat = (userId) => {
    getUser(userId).then((data) => {
      setCurrentChat((prevState) => ({
        ...prevState,
        buddyId: data.id,
        buddyName: data.name ?? 'Empty',
        buddyActive: isOnline(data.id),
      }));
      // Get messages
      updateMessages(userId);
    });
  };

  // Get ChatList
  const getChatList = async () => {
    // GetBuddyChatList to get chatlist
    try {
      const list = await getBuddyChatList();
      if (!list) {
        return;
      }

      const c = list.map((chat) => ({
        ...chat,
        userId: chat.id,
        active: false,
      }));
      setChatList(c);
      setSearchResult(c);

      if (list.length === 0) {
        return;
      }

      let { userId } = currentChat;
      let user;
      if (!userId) {
        user = await getSelf();
        userId = user.id;
      }

      setCurrentChat((prevState) => ({
        ...prevState,
        userId,
        buddyId: userId,
        buddyName: user?.name ?? 'Empty',
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect to load ChatList on load
  useEffect(() => {
    if (jwt == null || jwt === '') {
      return;
    }
    axios.defaults.headers.common = {
      Authorization: `Bearer ${jwt}`,
    };

    getChatList();

    const getUserId = async () => {
      // GetSelf to get userId
      let { userId } = currentChat;
      if (!userId) {
        const user = await getSelf();
        console.log(user);
        userId = user.id;
      }
      setCurrentChat((prevState) => ({
        ...prevState,
        userId,
      }));
    };
    getUserId();
  }, [jwt]);

  // useEffect to update chatlist when isActive is updated
  useEffect(() => {
    setCurrentChat((prevState) => ({
      ...prevState,
      buddyActive: isOnline(prevState.buddyId),
    }));

    setChatList((prevState) => {
      const state = prevState?.map((chat) => ({
        ...chat,
        active: !!isActive[chat.userId],
      }));
      setSearchResult(state);
      return state;
    });
  }, [isActive]);

  // Append Message to message list
  const appendMessage = (senderId, receiverId, message) => {
    setMessages((prevState) => [
      ...prevState,
      {
        senderId,
        sender: senderId,
        receiverId,
        receiver: receiverId,
        content: message,
        timestamp: Date.now(),
      },
    ]);
  };

  useEffect(() => {
    console.log('SocketIO - connection: ', connected);
    if (!connected) {
      return;
    }

    onMessageEvent(({ senderId, receiverId, message }) => {
      console.log('New Message', senderId, receiverId, message);
      updateChatList(receiverId, { lastMessage: message, timestamp: Date.now() });
      appendMessage(senderId, receiverId, message);
    });

    onOnlineEvent((userIds) => {
      console.log('Online:', userIds);
      const newIsActive = userIds.reduce(
        (actives, user) => ({ ...actives, [`${user.userId}`]: true }),
        {},
      );
      setIsActive(newIsActive);
    });
  }, [connected]);

  // Change Chat to userId
  const setChat = (userId) => {
    const filtered = chatList.filter((chat) => chat.userId === userId);
    setCurrentChat({
      buddyId: userId,
      name: filtered.length !== 1 ? filtered[0].name : 'Unknown',
    });
    updateMessages(userId);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    // values
    searchResult,
    currentChat,
    chatList,
    messages,
    // function
    updateChatList,
    setChat,
    selectChat,
    getChatList,
    appendMessage,
    handleSearch,
  };

  return <ChatContext.Provider value={context}>{children}</ChatContext.Provider>;
}

import React, { useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = React.createContext();

export function SocketContextProvider({ children }) {
  const [socket, setSocket] = useState(null);

  const onMessageEvent = (callback) => {
    socket.on('message', callback);
  };

  const onOnlineEvent = (callback) => {
    socket.on('online', callback);
  };

  const sendMessageEvent = (senderId, receiverId, message) => {
    socket.emit('message', {
      senderId,
      receiverId,
      message,
      timestamp: Date.now(),
    });
  };

  const sendReadEvent = (receiverId) => {
    socket.emit('read', {
      receiverId,
      timestamp: Date.now(),
    });
  };

  const connect = (jwt) => {
    const newSocket = io(process.env.REACT_APP_BACKEND_SOCKETIO, {
      auth: {
        token: jwt,
      },
    });

    setSocket(newSocket);
  };

  const disconnect = () => {
    socket?.disconnect();
    setSocket(null);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    // methods
    connect,
    disconnect,
    sendMessageEvent,
    sendReadEvent,

    // listeners
    onMessageEvent,
    onOnlineEvent,
  };

  return <SocketContext.Provider value={context}>{children}</SocketContext.Provider>;
}

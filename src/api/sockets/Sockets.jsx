import React, { useState, createContext } from 'react';
import io from 'socket.io-client';

/**
 * SocketContext to store socket connection and associated callback functions
 */
export const SocketContext = createContext();

/**
 * SocketContextProvider to provide socket connection and associated callback functions
 */
export function SocketContextProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  /**
   * Listen to new messages from the server using callback
   */
  const onMessageEvent = (callback) => {
    socket.on('message', callback);
  };

  /**
   * Listen to new online users from the server using callback
   */
  const onOnlineEvent = (callback) => {
    socket.on('online', callback);
  };

  /**
   * Send a message to a receiver using the socket connection
   */
  const sendMessageEvent = (senderId, receiverId, message) => {
    socket.emit('message', {
      senderId,
      receiverId,
      message,
      timestamp: Date.now(),
    });
  };

  /**
   * Send a request to let the server know the user read all messages
   */
  const sendReadEvent = (receiverId) => {
    socket.emit('read', {
      receiverId,
      timestamp: Date.now(),
    });
  };

  /**
   * Setup a new socket with the server using auth token
   */
  const connect = (jwt) => {
    const newSocket = io(`${process.env.REACT_APP_BACKEND_SOCKETIO}?jwt=${jwt}`, {
      transports: ['websocket'],
    });

    setSocket(newSocket);
    setConnected(true);
  };

  /**
   * Disconnect the socket (should be called when auth token is invalid or changed)
   */
  const disconnect = () => {
    socket?.disconnect();
    setSocket(null);
    setConnected(false);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values -- this is used so the screen can rerender when state changes
  const context = {
    // values
    connected,

    // functions
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

import React from "react";
import { io } from "socket.io-client";


class Socket {
  constructor() {
    this.socket = null;
  }

  sendMessage(senderId, receiverId, message) {
    this.socket.emit("message", {
      senderId,
      receiverId,
      message,
      timestamp: Date.now()
    })
  }

  onMessage(callback) {
    this.socket.on("message", callback);
  }

  sendReadEvent(receiverId) {
    this.socket.emit("read", {
      receiverId,
      timestamp: Date.now()
    })
  }

  sendOnlineEvent(callback) {
    this.socket.emit("online", callback);
  }

  onDisconnect(callback) {
    this.socket.on("disconnect", callback);
  }

  removeAllListeners() {
    this.socket.off("message");
    this.socket.off("online");
    this.socket.off("disconnect");
  }

  connect(jwt) {
    this.socket = io("http://localhost:5000", {
      auth: {
        token: jwt
      }
    });
  }

  disconnect() {
    this.removeAllListeners();
    this.socket.disconnect();

    this.socket = null;
  }
}

export const SocketHandler = new Socket();
export const SocketContext = React.createContext();
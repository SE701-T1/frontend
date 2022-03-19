import React, { useContext } from 'react';
import styles from './Chat.module.css';
import UserSearch from '../../components/UserSearch/UserSearch';
import ChatList from '../../components/ChatList/ChatList';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import DialogueList from '../../components/DialoguesList/DialoguesList';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChatBuddyDetail from '../../components/ChatBuddyDetail/ChatBuddyDetail';
import { ChatContext } from '../../context/ChatContext';
import { removeBuddy } from '../../api/UserAPI';
import { SocketContext } from '../../api/sockets/Sockets';

// TODO get courses from a user
const mockCourse = [
  {
    courseName: 'SOFTENG 701',
    courseLink: 'https://random.link',
  },
];

function Chat() {
  const {
    currentChat,
    searchResult,
    handleSearch,
    messages,
    selectChat,
    getChatList,
    updateChatList,
    appendMessage,
  } = useContext(ChatContext);
  const { sendMessageEvent } = useContext(SocketContext);

  const handleSelectChat = (buddyId) => {
    selectChat(buddyId);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatLeft}>
        <div className={styles.searchBar}>
          <UserSearch setSearchInput={handleSearch} />
        </div>
        <div className={styles.chatList}>
          {' '}
          <ChatList
            chatId={currentChat.buddyId}
            chatItems={searchResult}
            onChatItemClick={handleSelectChat}
          />{' '}
        </div>
      </div>
      <div className={styles.chatMiddle}>
        <div className={styles.header}>
          <ChatHeader
            active={currentChat.buddyActive}
            name={currentChat.buddyName}
            callBuddy={() => {}}
          />
        </div>
        <div className={styles.dialogueList}>
          <DialogueList
            messages={messages?.map((message) => ({
              ...message,
              text: message.content,
              contentType: 'text',
            }))}
            currentUser={currentChat.userId ?? 0}
          />
        </div>
        <div className={styles.input}>
          {' '}
          <ChatInput
            disable={currentChat.buddyId === currentChat.userId}
            onSend={(message) => {
              if (message === '') {
                return;
              }
              sendMessageEvent(currentChat.userId, currentChat.buddyId, message);
              updateChatList(currentChat.userId, { lastMessage: message, timestamp: Date.now() });
              appendMessage(currentChat.userId, currentChat.buddyId, message);
            }}
          />{' '}
        </div>
      </div>
      <div className={styles.chatRight}>
        <ChatBuddyDetail
          active={currentChat.buddyActive}
          name={currentChat.buddyName}
          removeBuddy={async () => {
            await removeBuddy(currentChat.buddyId);
            getChatList();
          }}
          commonCourses={mockCourse}
        />
      </div>
    </div>
  );
}

export default Chat;

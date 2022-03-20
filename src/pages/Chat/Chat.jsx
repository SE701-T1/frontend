import React, { useContext, useState, useEffect } from 'react';
import styles from './Chat.module.css';
import UserSearch from '../../components/UserSearch/UserSearch';
import ChatList from '../../components/ChatList/ChatList';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import DialogueList from '../../components/DialoguesList/DialoguesList';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChatBuddyDetail from '../../components/ChatBuddyDetail/ChatBuddyDetail';
import { ChatContext } from '../../context/ChatContext';
import { removeBuddy } from '../../api/UserAPI';
import { getCourses, getUserCourses } from '../../api/TimetableAPI';
import { SocketContext } from '../../api/sockets/Sockets';

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
  const [sharedCourses, setSharedCourses] = useState([]);
  const [courses, setCourses] = useState([]);

  const handleSelectChat = (buddyId) => {
    selectChat(buddyId);
  };

  // Update shared courses when the chat changes
  useEffect(async () => {
    if (courses.length === 0) {
      return;
    }
    const userCourses = await getUserCourses(currentChat.buddyId);

    const newSharedCourses = userCourses
      .filter((course) => courses.map((c) => c.courseId).includes(course.courseId))
      .map((course) => ({
        courseName: course.name,
        courseLink: `/find-matches`, // TODO add links to courses
      }));

    setSharedCourses(newSharedCourses);
  }, [currentChat]);

  // Get courses from the user at startup
  useEffect(async () => {
    const newCourses = await getCourses();
    setCourses(newCourses);
    setSharedCourses(
      newCourses.map((course) => ({
        courseName: course.name,
        courseLink: `/find-matches`, // TODO add links to courses
      })),
    );
  }, []);

  return (
    <div className={styles.chat}>
      <div className={styles.chatLeft}>
        <div className={styles.searchBar}>
          <UserSearch onSearch={handleSearch} />
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
          self={currentChat.buddyId === currentChat.userId}
          active={currentChat.buddyActive}
          name={currentChat.buddyName}
          removeBuddy={async () => {
            await removeBuddy(currentChat.buddyId);
            getChatList();
          }}
          commonCourses={sharedCourses}
        />
      </div>
    </div>
  );
}

export default Chat;

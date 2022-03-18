import React, { useEffect, useState} from 'react';
import styles from './Chat.module.css';
import UserSearch from '../../components/UserSearch/UserSearch'
import ChatList from '../../components/ChatList/ChatList'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import DialogueList from '../../components/DialoguesList/DialoguesList'
import ChatInput from '../../components/ChatInput/ChatInput'
import ChatBuddyDetail from '../../components/ChatBuddyDetail/ChatBuddyDetail'
import { getBuddyChatList} from '../../api/CommunicationAPI';

const mockMessage = [
  {
    sender: 'id3333',
    text: 'random message',
    contentType: 'text',
  },
  {
    sender: 'id5678',
    text: 'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    contentType: 'image',
  },
];

const mockCourse = [
  {
    courseName: 'SOFTENG 701',
    courseLink: 'https://random.link',
  },
];

function Chat() {
  const [chatList,setChatList] = useState([]);

  useEffect(()=>{
       const getChatList = async () => {
         try {const response = await getBuddyChatList();
          setChatList(response);
        }
        catch (err){
         console.log(err);
        }
      };
      getChatList();
  },[])

  return (
       <div className={styles.chat}>
        <div className={styles.chatLeft}>
          <div className={styles.searchBar}><UserSearch/></div>
          <div className={styles.chatList}> <ChatList chatItems={chatList}/> </div>
        </div>
        <div className={styles.chatMiddle}>
          
          <div className={styles.header}><ChatHeader name="Amy" callBuddy={() => {}} /></div>
          <div className={styles.dialogueList}><DialogueList
              messages={mockMessage}
              currentUser="id5678"
              senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
            /></div>       
           <ChatInput/>
        </div>
        <div className={styles.chatRight}>
           <ChatBuddyDetail name="test name" removeBuddy={() => {}} commonCourses={mockCourse} />
        </div>
       </div>
  );
}

export default Chat;
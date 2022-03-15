/**
 * Fetches the data of the users messages given user id
 * @param {number} userId id of the user
 * @return {Promise} data of the users messages
 */
export const getMessages = async (userId) => {
  console.log(userId);
  return [
    {
      sender: 'senderid',
      receiver: 'receiverid',
      timestamp: 1647383521,
      content: 'test message 1',
    },
    {
      sender: 'receiverid',
      receiver: 'receiverid',
      timestamp: 1647383522,
      content: 'test message 2',
    },
    {
      sender: 'senderid',
      receiver: 'receiverid',
      timestamp: 1647383523,
      content: 'test message 3',
    },
  ];
};

/**
 * Sends a message from one user to another
 * @param {string} sender id of the sender
 * @param {string} receiver id of the receiver
 * @param {string} content content of the message
 * @return {Promise} data entry of the message sent
 */
export const sendMessage = async ({ sender, receiver, content }) => {
  const timestamp = Date.now();
  console.log(sender, receiver, content, timestamp);
};

/**
 * Fetches data of the current users buddy chat list
 * @return {Promise} current users buddy chat list
 */
export const getBuddyChatList = async () => [
  {
    id: 1211,
    name: 'Sam',
    lastMessage: 'hey',
    timestamp: 1647383523,
  },
  {
    id: 1212,
    name: 'Ben',
    lastMessage: 'hello',
    timestamp: 1647383522,
  },
  {
    id: 1213,
    name: 'Tom',
    lastMessage: 'whats up',
    timestamp: 1647383521,
  },
];

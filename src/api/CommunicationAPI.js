import moment from 'moment';
import { getData } from './APIUtils';

// convert buddy by adding buddyCount which is missing from backend
const convertMessage = (message) => {
  if (message === null) {
    return null;
  }

  return {
    ...message,
    sender: message.senderId,
    receiver: message.receiverId,
    timestamp: moment(message.timestamp).toDate(),
  };
};

/**
 * Fetches the data of the users messages given user id
 * @param {number} userId id of the user
 * @param {number} buddyId id of the buddy
 * @return {Promise} data of the users messages
 */
const getMessages = async (userId, buddyId) =>
  getData(`api/communication/messages/${userId}?buddyId=${buddyId}`)?.map((message) =>
    convertMessage(message),
  );

/**
 * Fetches data of the current users buddy chat list
 * @return {Promise} current users buddy chat list
 */
export const getBuddyChatList = async () => [
  {
    id: 1211,
    name: 'Sam',
    lastMessage: 'hey',
    timestamp: moment('2022-03-18T07:19:16.780Z').toDate(),
  },
  {
    id: 1212,
    name: 'Ben',
    lastMessage: 'hello',
    timestamp: moment('2022-03-18T07:19:16.780Z').toDate(),
  },
  {
    id: 1213,
    name: 'Tom',
    lastMessage: 'whats up',
    timestamp: moment('2022-03-18T07:19:16.780Z').toDate(),
  },
];

export default getMessages;

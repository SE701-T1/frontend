import moment from 'moment';
import { getData } from './APIUtils';

/**
 * Convert buddy by adding buddyCount which is missing from backend
 */
const convertMessage = (message) => {
  if (message === null) {
    return null;
  }

  return {
    ...message,
    sender: message.senderId,
    receiver: message.receiverId,
    timestamp: message.timestamp ? moment(message.timestamp).toDate() : null,
  };
};

/**
 * Fetches the data of the users messages given user id
 * @param {number} buddyId id of the buddy
 * @return {Promise} data of the users messages
 */
export const getMessages = async (buddyId) => {
  const response = await getData(`api/communication/messages/${buddyId}`);
  return response?.map(convertMessage);
};

/**
 * Convert buddy by adding buddyCount which is missing from backend
 */
const convertChat = (chat) => {
  if (chat === null) {
    return null;
  }

  return {
    ...chat,
    timestamp: chat.timestamp ? moment(chat.timestamp).toDate() : null,
  };
};

/**
 * Fetches data of the current users buddy chat list
 * @return {Promise} current users buddy chat list
 */
export const getBuddyChatList = async () => {
  const response = await getData(`api/communication/chatlist`);
  return response.map(convertChat);
};

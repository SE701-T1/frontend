import { getData, putData, postData, deleteData } from './APIUtils';

// convert user by adding buddyCount which is missing from backend
const convertUser = (user) => {
  if (user === null) {
    return null;
  }

  return {
    ...user,
    buddyCount: 0,
  };
};

/**
 * Fetches the data of a single user given the users id
 * @param {number} userId id of the user to retrieve
 * @return {Promise} data of the user with the user id
 */
export const getUser = async (userId) => convertUser(getData(`api/users/${userId}`));

/**
 * Update the users pairing enabled field
 * @param {number} userId id of the user to update
 * @param {boolean} pairingEnabled value to update to
 * @return {Promise} data of the user with the user id
 */
export const updateUser = async (userId, pairingEnabled) =>
  convertUser(putData(`api/users/${userId}?pairingEnabled=${pairingEnabled}`));

/**
 * Fetches the list of buddies for a user
 * @param {number} userId id of the user to retrieve buddies for
 * @return {Promise} data of the users buddies
 */
export const getBuddies = async (userId) =>
  getData(`api/users/buddy/${userId}`)?.map((user) => convertUser(user));

/**
 * Adds a buddy to the current users buddy list
 * @param {number} userId id of the current user.
 * @param {number} buddyId id of the buddy.
 * @return {Promise} data entry of the buddy added
 */
export const addBuddy = async (userId, buddyId) =>
  postData(`api/users/buddy/${userId}?buddyId=${buddyId}`);

/**
 * Removes a buddy from the current users buddy list
 * @param {number} userId id of the current user.
 * @param {number} buddyId id of the buddy.
 * @return {Promise}
 */
export const removeBuddy = async (userId, buddyId) =>
  deleteData(`api/users/buddy/${userId}?buddyId=${buddyId}`);

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
 * Fetches the data of the current user
 * @return {Promise} data of the user data of self
 */
export const getSelf = async () => convertUser(getData(`api/users`));

/**
 * Fetches the data of a single user given the users id
 * @param {number} userId id of the user to retrieve
 * @return {Promise} data of the user with the user id
 */
export const getUser = async (userId) => convertUser(getData(`api/users/${userId}`));

/**
 * Update the users pairing enabled field
 * @param {boolean} pairingEnabled value to update to
 * @return {Promise} data of the user with the user id
 */
export const updateUser = async (pairingEnabled) =>
  convertUser(putData(`api/users?pairingEnabled=${pairingEnabled}`));

/**
 * Fetches the list of buddies for current user
 * @return {Promise} data of the users buddies
 */
export const getBuddies = async () => getData(`api/users/buddy`)?.map((user) => convertUser(user));

/**
 * Adds a buddy to the current users buddy list
 * @param {number} buddyId id of the buddy.
 * @return {Promise} data entry of the buddy added
 */
export const addBuddy = async (buddyId) => postData(`api/users/buddy/${buddyId}`);

/**
 * Removes a buddy from the current users buddy list
 * @param {number} userId id of the current user.
 * @param {number} buddyId id of the buddy.
 * @return {Promise}
 */
export const removeBuddy = async (buddyId) => deleteData(`api/users/buddy/${buddyId}`);

import { getData } from './APIUtils';

// convert buddy by adding buddyCount which is missing from backend
const convertBuddy = (buddy) => {
  if (buddy === null) {
    return null;
  }

  return {
    ...buddy,
    buddyCount: 0,
  };
};

/**
 * Finds users for pairing who take the given courses
 * @param {number} userId user we are finding pairing for.
 * @param {Array} courseIds array of course ids to find pairing for.
 * @return {Promise} users who take the course
 */
// eslint-disable-next-line import/prefer-default-export
export const findPairing = async (courseIds) => {
  const response = await getData(`api/pairing/matchBuddy/`, {
    courseIds,
  });
  return response?.map(convertBuddy);
};

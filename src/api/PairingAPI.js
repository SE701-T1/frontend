/**
 * Adds a buddy to the current users buddy list
 * @param {number} userId id of the current user.
 * @param {number} buddyId id of the buddy.
 * @return {Promise} data entry of the buddy added
 */
export const addBuddy = async (userId, buddyId) => {
  console.log(userId, buddyId);
};

/**
 * Removes a buddy from the current users buddy list
 * @param {number} userId id of the current user.
 * @param {number} buddyId id of the buddy.
 * @return {Promise}
 */
export const removeBuddy = async (userId, buddyId) => {
  console.log(userId, buddyId);
};

/**
 * Finds users for pairing who take the given courses
 * @param {number} courseIds array of course ids to find pairing for.
 * @return {Promise} users who take the course
 */
export const findPairing = async (courseIds) => {
  console.log(courseIds);
  return [
    {
      id: 1211,
      name: 'Sam',
      email: 'sam@gmail.com',
      buddyCount: 4,
    },
    {
      id: 1212,
      name: 'Ben',
      email: 'ben@gmail.com',
      buddyCount: 5,
    },
    {
      id: 1213,
      name: 'Tom',
      email: 'tom@gmail.com',
      buddyCount: 6,
    },
  ];
};

/**
 * Fetches data of the current users buddy list
 * @return {Promise} current users buddy list
 */
export const getBuddies = async () => [
  {
    id: 1211,
    name: 'Sam',
    email: 'sam@gmail.com',
    buddyCount: 4,
  },
  {
    id: 1212,
    name: 'Ben',
    email: 'ben@gmail.com',
    buddyCount: 5,
  },
  {
    id: 1213,
    name: 'Tom',
    email: 'tom@gmail.com',
    buddyCount: 6,
  },
];

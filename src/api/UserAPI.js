/**
 * Fetches the data of a single user given the users id
 * @param {number} userId id of the user to retrieve
 * @return {Promise} data of the user with the user id
 */
export const getUser = async (userId) => {
  console.log(userId);
  if (userId === 1211) {
    return {
      id: 1211,
      name: 'Sam',
      email: 'sam@gmail.com',
      buddyCount: 4,
    };
  }
  if (userId === 1212) {
    return {
      id: 1212,
      name: 'Ben',
      email: 'ben@gmail.com',
      buddyCount: 5,
    };
  }

  return {
    id: 1213,
    name: 'Tom',
    email: 'tom@gmail.com',
    buddyCount: 6,
  };
};

/**
 * Fetches the data of the current user
 * @return {Promise} data of the current user
 */
export const getSelf = async () => ({
  id: 1211,
  name: 'Sam',
  email: 'sam@gmail.com',
  buddyCount: 4,
});

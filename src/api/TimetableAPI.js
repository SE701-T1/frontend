/**
 * Fetches the data of all courses in the timetable
 * @return {Promise} data of all the courses
 */
export const getCourses = async () => [
  {
    courseId: 1214,
    name: 'SOFTENG 701',
    semester: '2022 sem 1',
    studentCount: 10,
    buddyCount: 4,
    updatedTime: 1647383521,
  },
  {
    courseId: 1215,
    name: 'SOFTENG 754',
    semester: '2022 sem 1',
    studentCount: 11,
    buddyCount: 5,
    updatedTime: 1647383522,
  },
  {
    courseId: 1216,
    name: 'ENGGEN 403',
    semester: '2022 sem 2',
    studentCount: 12,
    buddyCount: 6,
    updatedTime: 1647383523,
  },
];

/**
 * Fetches the data of the course with the course id
 * @param {number} courseId id of the course to retrieve
 * @return {Promise} data of the given course
 */
export const getCourse = async (courseId) => ({
  courseId,
  name: 'SOFTENG 701',
  semester: '2022 sem 1',
  studentCount: 10,
  buddyCount: 4,
  updatedTime: 1647383521,
});

/**
 * Fetches the data of a specific users courses
 * @param {number} userId id of the user for the courses to retrieve
 * @return {Promise} data of the users courses
 */
export const getUserCourses = async (userId) => {
  console.log(userId);
  return [
    {
      courseId: 1214,
      name: 'SOFTENG 701',
      semester: '2022 sem 1',
      studentCount: 10,
      buddyCount: 4,
      updatedTime: 1647383521,
    },
    {
      courseId: 1215,
      name: 'SOFTENG 754',
      semester: '2022 sem 1',
      studentCount: 11,
      buddyCount: 5,
      updatedTime: 1647383522,
    },
  ];
};

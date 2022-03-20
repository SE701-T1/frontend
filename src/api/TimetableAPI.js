import moment from 'moment';
import { getData, postData } from './APIUtils';

/**
 * Convert course by changing timestamp to new Date object
 */
const convertCourse = (course) => {
  if (course === null) {
    return null;
  }

  return {
    ...course,
    timestamp: moment(course.timestamp).toDate(),
  };
};

/**
 * Fetches the data of all courses in the timetable
 * @return {Promise} data of all the courses
 */
export const getCourses = async () => {
  const response = await getData('api/timetable/users/courses');
  return response?.map(convertCourse);
};

/**
 * Fetches the data of the course with the course id
 * @param {number} courseId id of the course to retrieve
 * @return {Promise} data of the given course
 */
export const getCourse = async (courseId) =>
  convertCourse(await getData(`api/timetable/courses/${courseId}`));

/**
 * Fetches the data of a specific users courses
 * @param {number} userId id of the user for the courses to retrieve
 * @return {Promise} data of the users courses
 */

export const getUserCourses = async (userId) => {
  const response = await getData(`api/timetable/users/courses/${userId}`);
  return response?.map(convertCourse);
};

/**
 * Sends the unique timetable URL of a user to be parsed
 * @param {URL} URL of the users timetable
 * @return {Promise}
 */
export const uploadTimetableURL = async (URL) => {
  const response = await postData(`api/timetable/users/upload/`, URL);
  return response;
};

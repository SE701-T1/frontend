import axios from 'axios';

const API_ENDPOINT = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

/**
 * Setup request error handler, handles all request errors from axios
 * E.g. if the request is not successful due to network issues
 */
axios.interceptors.request.use(
  (config) => config,
  (error) => {
    const req = error.request;
    // eslint-disable-next-line no-console
    console.error(`The server doesn't seem to be responding: ${req}`);
    return Promise.reject(error);
  },
);

/**
 * Setup response error handler, handles all response errors from axios
 * E.g. if the response is not successful due to backend errors
 */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;
    if (res.status === 401) {
      window.location.href = '/login';
    }
    // eslint-disable-next-line no-console
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  },
);

/**
 * Call a GET request on a give path
 */
export const getData = async (path) => {
  const response = await axios.get(`${API_ENDPOINT}/${path}`);
  return response.data;
};

/**
 * Call a POST request on a give path with the given data
 */
export const postData = async (path, data) => {
  const response = await axios.post(`${API_ENDPOINT}/${path}`, data);
  return response.data;
};

/**
 * Call a PUT request on a give path with the given data
 */
export const putData = async (path, data) => {
  const response = await axios.put(`${API_ENDPOINT}/${path}`, data);
  return response.data;
};

/**
 * Call a DELETE request on a give path with the given data
 */
export const deleteData = async (path, data) => {
  const response = await axios.delete(`${API_ENDPOINT}/${path}`, data);
  return response.data;
};

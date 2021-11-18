// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'https://yatchcloud-dev.fghire.com/'
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers['Authorization'];
  }
};

export default instance;

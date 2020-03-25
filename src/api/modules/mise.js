import axios from 'axios';

const MiseApi = (() => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_MISE_BASE_URL_DEV}`,
  });
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error.response);
    },
  );
  instance.interceptors.response.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error.response);
    },
  );
  return instance;
})();

export default {
  getMyLocationPm10: () => {
    MiseApi.get('/mise/pm10');
  },
};

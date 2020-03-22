import axios from 'axios';

const defaultParams = {
  params: {
    ServiceKey: process.env.REACT_APP_MISE_SERVICE_KEY,
    _returnType: 'json',
  },
};

const MiseApi = (() => {
  const instance = axios.create({
    baseURL: `http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc`,
  });
  instance.interceptors.request.use(
    config => {
      return Object.assign(config, defaultParams);
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
  get: params => {
    MiseApi.get('', { params });
  },
};

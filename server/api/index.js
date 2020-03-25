const axios = require('axios');

const ApiService = {
  get(uri) {
    return axios.get(`${uri}`);
  },
  post(uri, params) {
    return axios.post(`${uri}`, params);
  },
  update(uri, params) {
    return axios.put(uri, params);
  },
  delete(uri) {
    return axios.delete(uri);
  },
};

module.exports = ApiService;

/* eslint-disable */
import axios from 'axios';

const MiseApi = axios.create({
  baseURL: `http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc`,
});

export default {
  get: params => MiseApi.get('', { params }),
};

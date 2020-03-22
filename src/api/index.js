import axios from 'axios';

const MiseApi = axios.create({
  baseURL: `http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc`,
  params: {
    ServiceKey: process.env.REACT_APP_MISE_SERVICE_KEY,
    _returnType: 'json',
  },
});

const getMiseParams = params => Object.assign(MiseApi.defaults.params, params);

// const miseAlert = 'UlfptcaAlarmInqireSvc';
// const monitoringStation = 'MsrstnInfoInqireSvc';
// const airPolution = 'ArpltnInforInqireSvc';
// const airPolutionStats = 'ArpltnStatsSvc';
// const ozoneAndYellowDust = 'OzYlwsndOccrrncInforInqireSvc';

export default {
  get: params => {
    MiseApi.get('', { params: getMiseParams(params) });
  },
};

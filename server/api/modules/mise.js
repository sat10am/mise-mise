const ApiService = require('../index');

require('dotenv').config();

const miseApi = {
  getNearByMsrstnsUri() {
    console.log(
      `${
        process.env.MISE_BASE_URL
      }/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${42}&tmY=${127}&ServiceKey=${
        process.env.MISE_SERVICE_KEY
      }&s_returnType=json`,
    );
    return ApiService.get(
      `${
        process.env.MISE_BASE_URL
      }/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${42}&tmY=${127}&ServiceKey=${
        process.env.OTHER_KEY
      }&s_returnType=json`,
    );
  },
};

module.exports = miseApi;

/* eslint-disable */
const express = require('express');
const MiseApi = require('../api/modules/mise');

const router = express.Router();

router.get('/mise/pm10', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const nearStations = await MiseApi.getNearByMsrstnsUri(req.query);
  console.log('nearStations', nearStations);
});

module.exports = router;

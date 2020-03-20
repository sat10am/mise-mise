// libs
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const detectPort = require('detect-port');
// const axios = require('axios');
// api

// server setup
let port;
async function configServer() {
  port = 5000 || (await detectPort(5000));
}
configServer();

// express setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express routers
app.get('/', (req, res) => res.send('Hello World!'));

// start
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

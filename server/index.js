/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const newRelic = require('newrelic');
const path = require('path');
const compression = require('compression');
// const { getPhotos } = require('../database/index.js');

const app = express();
const PORT = 80;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const router = require('./router');

app.use(compression());
app.use(express.json());

app.use(express.static(PUBLIC_DIR));
app.use('/api/rooms/', router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

/* eslint-disable no-console */

const { Pool } = require('pg');
const connection = require('../connectionString.txt')

const db = new Pool(connection);

db.connect( function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the Postgres server.');
});
// eslint-disable-next-line max-len

module.exports = db;

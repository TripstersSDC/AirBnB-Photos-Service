/* eslint-disable no-console */
const { Pool } = require('pg');

// ..for local
const connectionString = 'postgres://anthonypatterson@localhost:5432/airbnb';

// for ec2
// const connectionString = 'postgres:///database/docker_data';

const db = new Pool({
  connectionString,
});

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the Postgres server.');
});
// eslint-disable-next-line max-len

module.exports = db;

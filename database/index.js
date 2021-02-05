/* eslint-disable no-console */
const { Sequelize } = require('sequelize');
// ..for local
const connectionString = 'postgres://anthonypatterson@localhost:5432/airbnb';

// for ec2
// const connectionString = 'postgres:///database/docker_data';

const db = new Sequelize(connectionString);

async function testCall() {
  db.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
}

testCall();

module.exports = db;

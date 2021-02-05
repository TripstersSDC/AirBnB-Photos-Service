/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { DataTypes } = require('sequelize');
const db = require('./index.js');

const Photos = db.define('Photos', {
  thumbnailURL: {
    type: DataTypes.STRING(100),
  },
  imageURL: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.STRING(1000),
  },
  room: {
    type: DataTypes.STRING(100),
  },

}, {
  // Other model options go here
});

const Listings = db.define('Listings', {
  name: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.STRING(1000),
  },
  room: {
    type: DataTypes.STRING(100),
  },
  photos_id: {
    type: DataTypes.INTEGER,
    model: 'Photos',
    key: 'id',
  },

}, {
  // Other model options go here
});

async function syncModels() {
  db.sync({ force: true })
    .then(() => {
      console.log('All models were synchronized successfully.');
    })
    .catch((error) => {
      console.error('Unable to sync models, error was:', error);
    });
}

syncModels();

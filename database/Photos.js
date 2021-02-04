/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

const photoSchema = new mongoose.Schema({
  listingId: {
    type: Number,
    required: true,
  },
  photos: [
    {
      id: {
        type: Number,
        required: true,
      },
      thumbnailUrl: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      room: {
        type: String,
        default: 'Living area',
        required: true,
      },
    },
  ],
});

const Photos = mongoose.model('Photo', photoSchema);

module.exports = Photos;

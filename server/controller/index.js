const photos = require('./photos');

module.exports = {
  getPhotos: (req, res) => photos(req, res),
};

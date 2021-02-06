const photos = require('./photos');
const listings = require('./listings');

module.exports = {
  getPhotos: (req, res) => photos(req, res),
  getListing: (req,res) => listings(req, res),
};

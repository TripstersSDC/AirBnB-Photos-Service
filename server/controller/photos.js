const Photos = require('../../database/Photos.js');

const photos = (req, res) => {
  console.log('in the request')
  const { propertyId } = req.params;

  const query = Photos.where({ listingId: propertyId });
  query.findOne((err, photos) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(photos);
    }
  });
};

module.exports = photos;

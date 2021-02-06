/* eslint-disable import/no-unresolved */
const Photos = require('../../database/Photos.js');

const photos = (req, res) => {
  const { propertyId } = req.params;

  const query = Photos.where({ listingId: propertyId });
  query.findOne((err, photoCollection) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(photoCollection);
    }
  });
};

module.exports = photos;

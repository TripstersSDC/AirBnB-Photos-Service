/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const db = require('../../database');

const photos = (req, res) => {
  const { propertyId } = req.params;

  // look into making into one query
  // consider join
  db.query(`SELECT * FROM listings INNER JOIN photos ON listing_id = fklisting_id WHERE listing_id = ${propertyId}`, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.status(200).json(results.rows);
  });
};

module.exports = photos;

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const db = require('../../database');

const listings = (req, res) => {
  const { propertyId } = req.params;

  db.query(`SELECT * FROM listings WHERE listing_id = ${propertyId}`, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.status(200).json(results.rows);
  });
};

module.exports = photos;
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const db = require('../../database');
const formatData = require('./formatData.js');

const photos = (req, res) => {
  const { propertyId } = req.params;

  // look into making into one query
  // consider join
  db.query(`SELECT * FROM listings INNER JOIN photos ON listing_id = fklisting_id WHERE listing_id = ${propertyId}`, (error, results) => {
    if (error) {
      throw error;
    }
    const queryData = results.rows;

    const responseData = formatData(queryData, propertyId);
    console.log(responseData);

    res.status(200).json(responseData);
  });
};

module.exports = photos;

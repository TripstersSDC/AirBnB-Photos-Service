const router = require('express').Router();
const controller = require('./controller/index');

router.get('/:propertyId/photos', controller.getPhotos);

module.exports = router;

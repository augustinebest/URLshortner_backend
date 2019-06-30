const express = require('express');
const router = express.Router();
const UrlDetailsController = require('../Controllers/UrlDetailsController');

router.post('/shortlink', UrlDetailsController.shortLink);

module.exports = router;
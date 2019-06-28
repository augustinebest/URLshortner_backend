const express = require('express');
const router = express.Router();
const UrlDetailsController = require('../Controllers/UrlDetailsController');

router.get('/', (req, res) => {res.json('Yayaya')})
router.post('/shortlink', UrlDetailsController.shortLink);
router.post('/redirectlink', UrlDetailsController.redirectLink);
router.get('/re/:link', UrlDetailsController.re);

module.exports = router;
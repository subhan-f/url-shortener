const express = require('express');
const {urlController} = require('../controllers');

const router = express.Router();

// API: create short URL
router
  .route('/url')
    // .get()
    .post(urlController.createShortUrl);

// Redirect: short id -> original
router
  .route('/:id')
    .get(urlController.getRedirectUrl);
// 	.post()
// 	.patch()
// 	.delete();

router.route('/url/analytics/:id')
	.get(urlController.getUrlAnalytics);

module.exports = router;
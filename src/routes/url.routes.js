const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url.controller');

// API: create short URL
router.post('/api/shorten', urlController.createShortUrl);

// Redirect: short id -> original
router.get('/:id', urlController.redirectToOriginal);

// Serve home (index.html served from static folder)
router.get('/', (req, res) => {
	res.sendFile('home.html', { root: require('path').join(__dirname, '..', 'views') });
});

module.exports = router;
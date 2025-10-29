const urlModel = require('../models/url.model');
const config = require('../config/config');

exports.createShortUrl = (req, res, next) => {
	try {
		const { url } = req.body;
		if (!url) return res.status(400).json({ error: 'Missing url in request body' });

		const record = urlModel.create(url);
		res.json({
			shortId: record.id,
			shortUrl: `${config.BASE_URL}/${record.id}`,
			originalUrl: record.original
		});
	} catch (err) {
		next(err);
	}
};

exports.redirectToOriginal = (req, res, next) => {
	try {
		const { id } = req.params;
		const record = urlModel.find(id);
		if (!record) return res.status(404).send('Not found');
		res.redirect(record.original);
	} catch (err) {
		next(err);
	}
};
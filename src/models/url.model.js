const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
	shortId: {
		type: String,
		required: true,
		unique: true
	},
	redirectUrl: {
		type: String,
		required: true
	},
	visitHistory: [{
		ip: {
			type: String,
			required: true
		},
		timestamp: {
			type: Date,
			default: Date.now
		},
		userAgent: {
			type: String,
			required: true
		},
		location: {
			type: String,
			required: false
		}
	}]
}, { timestamps: true });


module.exports = mongoose.model('Url', urlSchema);

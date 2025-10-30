const dbConfig = require('./db.config');
const envConfig = require('./env.config');

module.exports = {
	...dbConfig,
	...envConfig
};

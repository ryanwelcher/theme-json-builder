const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		wrapper: './includes/blocks/wrapper',
		settings: './includes/blocks/settings',
	},
};

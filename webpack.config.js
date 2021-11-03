const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		'theme-json': './includes/blocks/theme-json',
	},
};

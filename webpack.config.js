const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		datastore: './includes/datastore',
		'theme-json': './includes/blocks/theme-json',
		settings: './includes/blocks/settings',
	},
};

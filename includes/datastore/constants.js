// Actions
export const UPDATE_JSON = 'UPDATE_JSON';

// Default state
export const DEFAULT_STATE = {};

export const DEFAULT_STATE_TEST = {
	$schema: 'https://schemas.wp.org/trunk/theme.json',
	version: 2,
	settings: {
		spacing: {
			blockGap: true,
		},
		border: {
			radius: true,
			color: true,
			style: true,
			width: true,
		},
		color: {
			background: true,
			coreGradients: true,
			corePalette: true,
			text: true,
			palette: [
				{
					name: 'Black',
					slug: 'black',
					color: '#000000',
				},
			],
		},
	},
};

// Store name
export const STORE_NAME = 'theme-json-builder';

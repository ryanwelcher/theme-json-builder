/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';

const { name } = json;

registerBlockType( name, {
	edit,
	save: () => null,
	variations: [
		{
			name: 'settings',
			title: 'Settings',
			attributes: { objectProperty: 'settings' },
			isDefault: true,
			isActive: ( blockAttributes, variationAttributes ) =>
				blockAttributes.objectProperty ===
				variationAttributes.objectProperty,
		},
		{
			name: 'colors',
			title: 'Colors',
			attributes: { objectProperty: 'colors' },
			isActive: ( blockAttributes, variationAttributes ) =>
				blockAttributes.objectProperty ===
				variationAttributes.objectProperty,
		},
	],
} );

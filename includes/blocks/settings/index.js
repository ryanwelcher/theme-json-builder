/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';

const { name } = json;

registerBlockType( name, {
	edit,
	save,
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
			name: 'styles',
			title: 'Styles',
			attributes: { objectProperty: 'styles' },
			isActive: ( blockAttributes, variationAttributes ) =>
				blockAttributes.objectProperty ===
				variationAttributes.objectProperty,
		},
		{
			name: 'custom-templates',
			title: 'Custom Templates',
			attributes: { objectProperty: 'customTemplates' },
			isActive: ( blockAttributes, variationAttributes ) =>
				blockAttributes.objectProperty ===
				variationAttributes.objectProperty,
		},
		{
			name: 'template-parts',
			title: 'templateParts',
			attributes: { objectProperty: 'templateParts' },
			isActive: ( blockAttributes, variationAttributes ) =>
				blockAttributes.objectProperty ===
				variationAttributes.objectProperty,
		},
	],
} );

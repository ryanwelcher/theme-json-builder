export const SETTINGS_ALLOWED_BLOCKS = [
	'theme-json-builder/appearance-tools',
	'theme-json-builder/blocks',
	'theme-json-builder/border',
	'theme-json-builder/color',
	'theme-json-builder/custom',
	'theme-json-builder/layout',
	'theme-json-builder/spacing',
	'theme-json-builder/typography',
];

export const STYLES_ALLOWED_BLOCKS = [
	'theme-json-builder/appearance-tools',
	'theme-json-builder/blocks',
	'theme-json-builder/border',
	'theme-json-builder/color',
	'theme-json-builder/elements',
	'theme-json-builder/spacing',
	'theme-json-builder/typography',
];

export const CUSTOM_TEMPLATES_ALLOWED_BLOCKS = [];
export const TEMPLATE_PARTS_ALLOWED_BLOCKS = [];

/**
 * Retrieve the list of allowed blocks for a given object property.
 *
 * @param {string} objectProperty Each block stores the property it represents in the theme.json. For example, settings.
 * @return {Array} Array of allow blocks for the objectProperty
 */
const getAllowedBlocks = ( objectProperty ) => {
	switch ( objectProperty ) {
		case 'settings':
			return SETTINGS_ALLOWED_BLOCKS;
		case 'styles':
			return STYLES_ALLOWED_BLOCKS;
		case 'customTemplates':
			return CUSTOM_TEMPLATES_ALLOWED_BLOCKS;
		case 'templateParts':
			return TEMPLATE_PARTS_ALLOWED_BLOCKS;
	}
};

export default getAllowedBlocks;

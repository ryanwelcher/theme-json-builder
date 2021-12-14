/**
 * Generate the about of tabs needed to correctly display the nesting in the block editor
 *
 * @param {string} objectPath
 * @return {string} The number of \t to use or an empty string.
 */
const generateCodeIndent = ( objectPath ) => {
	return objectPath
		.split( '.' )
		.filter( Boolean )
		.reduce( ( val ) => {
			return `${ val }\t`;
		}, '' );
};

export default generateCodeIndent;

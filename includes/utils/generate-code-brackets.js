import { generateCodeIndent } from '.';

const generateCodeBrackets = ( objectPath, objectProperty, isDisplaying ) => {
	const codeIndent = generateCodeIndent( objectPath );
	const openBraces = isDisplaying
		? `${ codeIndent }"${ objectProperty }": {`
		: `${ codeIndent }"${ objectProperty }": { ... }`;
	const closeBraces = `${ codeIndent }}`;

	return [ openBraces, closeBraces ];
};

export default generateCodeBrackets;

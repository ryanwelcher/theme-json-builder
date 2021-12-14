/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import SourceCodeDisplay from '../../components/source-code-display';
import { STORE_NAME } from '../../datastore/constants';
import { getAllowedBlocks, generateCodeBrackets } from '../../utils/';
import { useShouldDisplayContent } from '../../hooks/use-should-display-content';

const Edit = ( {
	context,
	setAttributes,
	attributes: { objectPath, objectProperty },
	isSelected,
	clientId,
} ) => {
	const blockProps = useBlockProps();
	const displayContent = useShouldDisplayContent( {
		isSelected,
		clientId,
	} );
	const parentPath = context[ 'theme-builder/object-path' ];
	const { updateThemeJSON } = useDispatch( STORE_NAME );

	// Should the be a hook?
	const [ topBracket, bottomBracket ] = generateCodeBrackets(
		objectPath,
		objectProperty,
		displayContent
	);

	useEffect( () => {
		setAttributes( { objectPath: `${ parentPath }.${ objectProperty }` } );
		updateThemeJSON( objectPath, objectProperty, {} );
	}, [] );

	return (
		<div { ...blockProps }>
			<SourceCodeDisplay lang="json" sourceCode={ topBracket } />

			{ displayContent && (
				<InnerBlocks
					allowedBlocks={ getAllowedBlocks( objectProperty ) }
				/>
			) }

			{ displayContent && (
				<SourceCodeDisplay lang="json" sourceCode={ bottomBracket } />
			) }
		</div>
	);
};

export default Edit;

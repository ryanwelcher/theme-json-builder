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
import getAllowedBlocks from '../../utils/get-allowed-blocks';
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
	useEffect( () => {
		setAttributes( { objectPath: `${ parentPath }.${ objectProperty }` } );
		updateThemeJSON( objectPath, objectProperty, {} );
	}, [] );

	// @todo make this reusable for other blocks
	const topCode = displayContent
		? `\t"${ objectProperty }": {`
		: `\t"${ objectProperty }": { ... }`;

	return (
		<div { ...blockProps } style={ { paddingLeft: '0' } }>
			<SourceCodeDisplay lang="json" sourceCode={ topCode } />

			{ displayContent && (
				<InnerBlocks
					allowedBlocks={ getAllowedBlocks( objectProperty ) }
				/>
			) }

			{ displayContent && (
				<SourceCodeDisplay lang="json" sourceCode={ '\t}' } />
			) }
		</div>
	);
};

export default Edit;

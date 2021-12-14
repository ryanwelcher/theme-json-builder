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
import { useHasSelectedChild } from '../../hooks/use-has-selected-child';

const Edit = ( {
	context,
	setAttributes,
	attributes: { objectPath, objectProperty },
	isSelected,
	clientId,
} ) => {
	const blockProps = useBlockProps();
	const hasSelectedChild = useHasSelectedChild( clientId );
	const parentPath = context[ 'theme-builder/object-path' ];
	const { updateThemeJSON } = useDispatch( STORE_NAME );
	useEffect( () => {
		setAttributes( { objectPath: `${ parentPath }.${ objectProperty }` } );
		updateThemeJSON( objectPath, objectProperty, {} );
	}, [] );

	const displayContent = isSelected || hasSelectedChild;

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

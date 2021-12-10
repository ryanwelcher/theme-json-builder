/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const Edit = ( {
	context,
	setAttributes,
	attributes: { objectPath, objectProperty },
} ) => {
	const blockProps = useBlockProps();
	const parentPath = context[ 'theme-builder/object-path' ];

	useEffect( () => {
		setAttributes( { objectPath: `${ parentPath }.${ objectProperty }` } );
	}, [] );

	console.log( objectPath );

	console.log( context );
	return (
		<div { ...blockProps } style={ { marginLeft: '20px' } }>
			settings: &#123;
			<InnerBlocks templateLock={ false } />
			&#125;
		</div>
	);
};

export default Edit;

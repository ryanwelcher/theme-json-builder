/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

const Edit = ( { setAttributes } ) => {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<InspectorControls>Version: 1</InspectorControls>
			<InnerBlocks templateLock={ false } />
		</div>
	);
};

export default Edit;

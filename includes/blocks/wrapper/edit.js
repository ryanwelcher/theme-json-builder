/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

const Edit = () => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			&#123;
			<InspectorControls>Version: 1</InspectorControls>
			<InnerBlocks templateLock={false} />
			&#125;
		</div>
	);
};

export default Edit;

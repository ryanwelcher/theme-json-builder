/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Edit = () => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps} style={{ marginLeft: '20px' }}>
			settings: &#123;
			<InnerBlocks templateLock={false} />
			&#125;
		</div>
	);
};

export default Edit;

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return <InnerBlocks.Content { ...useBlockProps.save() } />;
};

export default Save;

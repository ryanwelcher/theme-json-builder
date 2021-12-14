/**
 * External dependencies
 */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
/**
 * WordPress Dependencies
 */
import { Button } from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

export const CopyButton = ( { sourceCode } ) => {
	const ref = useCopyToClipboard( sourceCode, () => {} );
	return (
		<Button
			type="secondary"
			ref={ ref }
			icon="clipboard"
			showTooltip
			label={ __( 'Copy source code', 'gutenberg-block-level-locking' ) }
		>
			{ __( 'Copy source code', 'gutenberg-block-level-locking' ) }
		</Button>
	);
};

const SourceCodeDisplay = ( { sourceCode, lang = 'json' } ) => {
	return (
		<>
			<SyntaxHighlighter language={ lang } style={ tomorrow }>
				{ sourceCode }
			</SyntaxHighlighter>
		</>
	);
};
export default SourceCodeDisplay;

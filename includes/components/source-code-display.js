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

const SourceCodeDisplay = ( { sourceCode, lang } ) => {
	const ref = useCopyToClipboard( sourceCode, () => {} );
	return (
		<>
			<SyntaxHighlighter language={ lang } style={ tomorrow }>
				{ sourceCode }
			</SyntaxHighlighter>
			<Button
				type="secondary"
				ref={ ref }
				icon="clipboard"
				showTooltip
				label={ __(
					'Copy source code',
					'gutenberg-block-level-locking'
				) }
			>
				{ __( 'Copy source code', 'gutenberg-block-level-locking' ) }
			</Button>
		</>
	);
};
export default SourceCodeDisplay;

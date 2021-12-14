import { useSelect } from '@wordpress/data';

/**
 * useHasSelectedInnerBlock
 * Determine whether one of the inner blocks currently is selected
 *
 * @param {string} clientId
 * @return {boolean} wether the block is the ancestor of selected blocks
 */
export function useHasSelectedChild( clientId ) {
	return useSelect( ( select ) =>
		select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true )
	);
}

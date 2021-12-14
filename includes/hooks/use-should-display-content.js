import { useSelect } from '@wordpress/data';

/**
 * useShouldDisplayContent
 * Determine whether one of the inner blocks currently is selected
 *
 * @param {Object}  props
 * @param {boolean} props.isSelected
 * @param {string}  props.clientId
 * @return {boolean} whether the block is the ancestor of selected blocks
 */
export function useShouldDisplayContent( { isSelected, clientId } ) {
	const childSelected = useSelect( ( select ) =>
		select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true )
	);
	return isSelected || childSelected;
}

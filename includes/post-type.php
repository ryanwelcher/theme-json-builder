<?php
/**
 * Custom post type for each theme.json instance
 *
 * @package ThemeJsonBuilder\PostType
 */

namespace ThemeJsonBuilder\PostType;

/**
 * Entry point
 */
function init() {
	\add_action( 'init', __NAMESPACE__ . '\register_custom_post_type' );
	\add_filter( 'allowed_block_types_all', __NAMESPACE__ . '\remove_core_blocks', 10, 2 );
}


/**
 * Callback to register the custom post type.
 */
function register_custom_post_type() {
	register_post_type(
		'theme-json',
		array(
			'labels'       => array(
				'name'          => _x( 'theme.json', 'Post type general name', 'theme-json-builder' ),
				'singular_name' => _x( 'theme.json', 'Post type singular name', 'theme-json-builder' ),
				'menu_name'     => _x( 'Theme JSON', 'Admin Menu text', 'theme-json-builder' ),
				'add_new'       => __( 'Add New theme.json', 'theme-json-builder' ),
			),
			'public'       => true,
			'show_in_rest' => true,
		)
	);
}

/**
 * Callback to remove all of the core blocks.
 *
 * @param array                   $allowed_block_types The list of registered blocks.
 * @param WP_Block_Editor_Context $editor_context      The current block editor context.
 */
function remove_core_blocks( $allowed_block_types, $editor_context ) {
	// Remove all the core blocks from this post type.
	if ( 'theme-json' === $editor_context->post->post_type ) {
		// Return the array of custom blocks we will allow.
		return get_allowed_custom_block_list();
	}

	// Return all registered blocks.
	return $allowed_block_types;
}

/**
 * Helper to return the list of custom blocks we'll use.
 *
 * @todo Get tricksy in here to scan the files and create the list that way.
 *
 * @return array The list of custom blocks.
 */
function get_allowed_custom_block_list() {
	return apply_filters( 'theme_json_builder_allowed_blocks', array() );
}


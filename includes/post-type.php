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

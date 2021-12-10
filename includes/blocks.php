<?php
/**
 * Central file to manage registering all of the blocks
 *
 * @package ThemeJsonBuilder\Blocks
 */

namespace ThemeJsonBuilder\Blocks;

/**
 * Entry point
 */
function init() {
	\add_action( 'init', __NAMESPACE__ . '\register_custom_blocks' );
}

/**
 * The list of blocks this plugin registers
 */
function available_blocks() {
	return apply_filters(
		'theme_json_builder_allowed_blocks',
		array(
			'theme-json-builder/theme-json',
			'theme-json-builder/settings',
		)
	);
}

/**
 * Callback for the registering the custom blocks.
 */
function register_custom_blocks() {
	// Register the blocks.
	foreach ( available_blocks() as $block ) {
		$block_dir = preg_replace( '/^[a-z\-]*\//', '', $block );
		register_block_type(
			THEME_JSON_BUILDER_BLOCK_DIR . $block_dir,
			array(
				'render_callback' => function( $attributes, $content, $block_instance ) use ( $block_dir ) {
					ob_start();
					require_once THEME_JSON_BUILDER_BLOCK_DIR . $block_dir . '/template.php';
					return ob_get_clean();
				},
			)
		);
	}
}

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
 * Callback for the registering the custom blocks.
 */
function register_custom_blocks() {
	// Include the blocks.
	register_custom_block( THEME_JSON_BUILDER_BLOCK_DIR . 'theme-json' );
}

/**
 * Helper to register and individual block.
 *
 * @param string $dir The path to the block.json file.
 */
function register_custom_block( $dir ) {
	register_block_type(
		$dir,
		array(
			'render_callback' => function( $attributes, $content, $block ) {
				require_once $dir . '/template.php';
			},
		)
	);
}



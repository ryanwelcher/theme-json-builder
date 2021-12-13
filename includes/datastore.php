<?php
/**
 * Central file to manage registering the datastore.
 *
 * @package ThemeJsonBuilder\Datastore
 */

namespace ThemeJsonBuilder\Datastore;

/**
 * Entry point
 */
function init() {
	\add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_datastore' );
}

/**
 * Callback for the registering the custom blocks.
 */
function register_datastore() {
	$datastore_assets_dir_path = THEME_JSON_BUILDER_DIR_PATH . 'build/datastore.asset.php';
	if ( file_exists( $datastore_assets_dir_path ) ) {
		$assets = require $datastore_assets_dir_path;
		wp_enqueue_script(
			'theme-json-builder-datastore',
			THEME_JSON_BUILDER_DIR_URL . 'build/datastore.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}

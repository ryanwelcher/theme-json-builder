<?php
/**
 * Admin page items for the plugin
 *
 * @package ThemeJsonBuilder\Admin
 */

namespace ThemeJsonBuilder\Admin;

/**
 * Entry point for the admin page
 */
function init() {
	\add_action( 'admin_menu', __NAMESPACE__ . '\register_custom_admin_page' );
	\add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_custom_admin_page_scripts' );
}


/**
 * Callback to register the page
 */
function register_custom_admin_page() {
	\add_menu_page(
		__( 'Theme.json', 'theme-json-builder' ),
		__( 'Theme.json', 'theme-json-builder' ),
		'manage_options',
		'theme-json-creator',
		__NAMESPACE__ . '\render_custom_admin_page_content'
	);
}


/**
 * Callback to render the contents of the page to be replaced by the React application.
 */
function render_custom_admin_page_content() {
	echo \wp_kses_post( sprintf( '<div id="app">%s</div>', \esc_html__( 'Requires JavaScript', 'theme-json-builder' ) ) );
}

/**
 * Enqueue the JavaScript for our custom page
 *
 * @param string $hook The current admin page.
 */
function enqueue_custom_admin_page_scripts( $hook ) {

	if ( 'toplevel_page_theme-json-creator' !== $hook ) {
		return;
	}

	$asset_path = THEME_JSON_BUILDER_DIR_PATH . 'build/index.asset.php';

	if ( file_exists( $asset_path ) ) {
		$assets = include $asset_path;
		wp_enqueue_script(
			'my_custom_script',
			THEME_JSON_BUILDER_DIR_URL . '/build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

	}
}

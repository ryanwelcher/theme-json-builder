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
	echo \wp_kses_post( '<div id="app">Requires JavaScript</div>' );
}

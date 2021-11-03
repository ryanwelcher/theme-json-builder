<?php
/**
 * Plugin Name: Theme.json builder
 * Description: Build theme.json file for your theme.
 * Version: 0.0.1
 * Requires at least: 5.8
 * Author: Ryan Welcher, Daisy Olsen
 * Author URI: https://www.wordpress.org
 * Text Domain: theme-json-builder
 *
 * @package ThemeJsonBuilder
 */

namespace ThemeJsonBuilder;

use ThemeJsonBuilder\Admin;
use ThemeJsonBuilder\PostType;

/**
 * Helpful constants
 */
define( 'THEME_JSON_BUILDER_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'THEME_JSON_BUILDER_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'THEME_JSON_BUILDER_INC_PATH', THEME_JSON_BUILDER_DIR_PATH . '/includes/' );
define( 'THEME_JSON_BUILDER_BLOCK_DIR', THEME_JSON_BUILDER_INC_PATH . '/blocks/' );


// Require the files.
require_once THEME_JSON_BUILDER_INC_PATH . 'admin-page.php';
require_once THEME_JSON_BUILDER_INC_PATH . 'post-type.php';


/**
 * Entry point for the plugin.
 */
Admin\init();
PostType\init();

/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import App from './App';

domReady(() => {
	render(<App />, document.getElementById('app'));
});

/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { set as resolve } from 'lodash';

/**
 * WordPress Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import { DEFAULT_STATE, UPDATE_JSON, STORE_NAME } from './constants';

// Define the store.
const store = createReduxStore( STORE_NAME, {
	reducer( themeJSON = DEFAULT_STATE, action ) {
		const { type, payload } = action;

		switch ( type ) {
			case UPDATE_JSON:
				const { path, property, value } = payload;
				const pathArray = path.split( '.' ).filter( Boolean );
				return {
					...resolve( themeJSON, [ ...pathArray, property ], value ),
				};
		}

		return themeJSON;
	},
	actions: {
		updateThemeJSON( path, property, value ) {
			return {
				type: UPDATE_JSON,
				payload: {
					path,
					property,
					value,
				},
			};
		},
	},
	selectors: {
		getThemeJSON( themeJSON ) {
			return JSON.stringify( themeJSON, null, '\t' );
		},
	},
} );

// Register the store.
register( store );

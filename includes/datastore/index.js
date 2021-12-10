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
	reducer( state = DEFAULT_STATE, { type, payload } ) {
		switch ( type ) {
			case UPDATE_JSON:
				return {
					...state,
					payload,
				};
		}

		return state;
	},
	actions: {
		updateJSON( path, property ) {
			return {
				type: UPDATE_JSON,
				payload: {
					path,
					property,
				},
			};
		},
	},
	selectors: {
		getThemeJson( state ) {
			return state.themeJson;
		},
	},
} );

// Register the store.
register( store );

/**
 * WordPress Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import { DEFAULT_STATE, UPDATE_JSON } from './constants';

const actions = {
	updateJSON( path, property ) {
		return {
			type: UPDATE_JSON,
			payload: {
				path,
				property,
			},
		};
	},
};

const store = createReduxStore( 'theme-json-builder', {
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
	actions,
	selectors: {
		getThemeJson( state ) {
			return state.themeJson;
		},
	},
} );

//
register( store );

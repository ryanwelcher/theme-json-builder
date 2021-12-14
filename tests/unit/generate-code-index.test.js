import { generateCodeIndent } from '../../includes/utils';
describe( 'generateCodeIndent', () => {
	it( 'Does not indent for root level', () => {
		expect( generateCodeIndent( '' ) ).toBe( '' );
	} );

	it( 'Indents one level for supports', () => {
		expect( generateCodeIndent( 'supports' ) ).toBe( '\t' );
	} );

	it( 'Indents two levels for supports.border', () => {
		expect( generateCodeIndent( 'supports.border' ) ).toBe( '\t\t' );
	} );
	it( 'Indents three levels for blocks.core/paragraph.border', () => {
		expect( generateCodeIndent( 'blocks.core/paragraph.border' ) ).toBe(
			'\t\t\t'
		);
	} );
} );

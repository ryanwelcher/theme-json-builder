/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import SourceCodeDisplay from '../../components/source-code-display';
import { STORE_NAME } from '../../datastore/constants';

const Edit = ( {
	attributes: { objectPath, schema, version },
	setAttributes,
} ) => {
	const blockProps = useBlockProps( {
		className: 'has-extra-small-font-size', // This might be an issue
	} );

	const { updateThemeJSON } = useDispatch( STORE_NAME );

	const topCode = `{\n\t"$schema": "${ schema }",\n\t"version": ${ version }`;

	return (
		<div { ...blockProps }>
			<SourceCodeDisplay lang="json" sourceCode={ topCode } />
			<InnerBlocks />
			<SourceCodeDisplay lang="json" sourceCode={ '}' } />
			<InspectorControls>
				<PanelBody title="Options" initialOpen={ true }>
					<PanelRow>
						<TextControl
							label={ __( 'Schema', 'theme-json-builder' ) }
							value={ schema }
							onChange={ ( newSchema ) => {
								setAttributes( { schema: newSchema } );
								updateThemeJSON(
									objectPath,
									'schema',
									newSchema
								);
							} }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __( 'Version', 'theme-json-builder' ) }
							labelPosition="side"
							options={ [
								{ label: '1 - deprecated', value: 1 },
								{ label: '2', value: 2 },
							] }
							value={ version }
							onChange={ ( newVersion ) => {
								setAttributes( { version: newVersion } );
								updateThemeJSON(
									objectPath,
									'version',
									newVersion
								);
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Edit;

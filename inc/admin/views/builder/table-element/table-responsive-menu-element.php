<?php

namespace WP_Table_Builder\Inc\Admin\Views\Builder\Table_Element;

use WP_Table_Builder\Inc\Admin\Base\Element_Base_Object;
use WP_Table_Builder\Inc\Admin\Controls\Control_Section_Group_Collapse;
use WP_Table_Builder\Inc\Admin\Managers\Controls_Manager;
use WP_Table_Builder as NS;

// if called directly, abort
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Table_Responsive_Menu_Element.
 *
 * Left panel container for responsive menu controls/options/settings.
 *
 * @package WP_Table_Builder\Inc\Admin\Views\Builder\Table_Element
 */
class Table_Responsive_Menu_Element extends Element_Base_Object {

	/**
	 * Get element name.
	 *
	 * Retrieve the element name.
	 *
	 * @return string The name.
	 * @since 1.1.2
	 * @access public
	 *
	 */
	public function get_name() {
		return 'table_responsive_menu';
	}

	/**
	 * Include file with js script for element
	 *
	 * @since 1.1.2
	 * @access protected
	 */
	public function element_script() {
		return wp_normalize_path( NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/table-element-scripts/table-responsive-menu.js' );
	}

	/**
	 * Register controls.
	 *
	 * Used to add new controls group to stack
	 *
	 * @since 1.1.2
	 * @access protected
	 */
	protected function _register_controls() {
		$help_section_group_controls = [
			'helpAndInfo' => [
				'label' => 'none',
				'type'  => Controls_Manager::HTML_OUTPUT,
				'html'  => '<div style="font-size: 80%; padding: 0 20px"><i>info and help about usage of this menu will be here...</i></div>',
			]
		];

		Control_Section_Group_Collapse::add_section( 'table_responsive_panel', esc_html__( 'info', 'wp-table-builder' ), $help_section_group_controls, [
			$this,
			'add_control'
		], true );


		$this->add_control( 'responsiveData', [
			'type'    => Controls_Manager::DATA_MULE,
			'dataId'  => 'responsiveMenuData',
			'dataObj' => [
				'screenSizes'  => [
					'desktop' => [
						'name'  => __( 'desktop', 'wp-table-builder' ),
						'width' => 1024
					],
					'tablet'  => [
						'name'  => __( 'tablet', 'wp-table-builder' ),
						'width' => 700
					],
					'mobile'  => [
						'name'  => __( 'mobile', 'wp-table-builder' ),
						'width' => 300
					]
				],
				'compareSizes' => [
					'iPad'      => 768,
					'iPhone X'  => 375,
					'Pixel 2'   => 411,
					'Galaxy S5' => 360,
				],
				'strings'      => [
					'enableResponsive'     => esc_html__( 'enable responsive table', 'wp-table-builder' ),
					'enableResponsiveHelp' => esc_html__( 'Enable responsive capabilities of current table', 'wp-table-builder' ),
					'stackDirection' => esc_html__( 'Cell stack direction', 'wp-table-builder' ),
					'topRowHeader' => esc_html__( 'Top row as header', 'wp-table-builder' ),
					'row'                  => esc_html__( 'row', 'wp-table-builder' ),
					'column'               => esc_html__( 'column', 'wp-table-builder' ),
					'mode'                 => esc_html__( 'mode', 'wp-table-builder' ),
					'auto'                 => esc_html__( 'auto', 'wp-table-builder' ),
					'pattern'              => esc_html__( 'pattern', 'wp-table-builder' ),
					'full'                 => esc_html__( 'full', 'wp-table-builder' ),
					// for help text of responsive modes, use the format of `{mode_name}Help`, this will be parsed dynamically to change the help text at frontend
					'autoHelp'             => esc_html__( 'Auto: Table will be reconstructed automatically with the given options by stacking rows/columns.' ),
					'patternHelp'          => esc_html__( 'Pattern: Pattern of the topmost selected rows/columns will be applied to the rest of the table.' ),
					'fullHelp'             => esc_html__( 'Full: You have full control over how table will be constructed.' ),
					'stackDirectionHelp' => esc_html__('The order of stacking, either by row or by columns.'),
					'topRowHeaderHelp' => esc_html__('Use the top most row of table as a header.')
				]
			]
		] );
	}
}

<?php
namespace WP_Table_Builder\Inc\Admin\Element_Classes\Elements;

use WP_Table_Builder\Inc\Admin\Element_Classes\Base\Element_Base_Object as Element_Base_Object;
use WP_Table_Builder\Inc\Admin\Element_Classes\Managers\Controls_Manager as Controls_Manager;
use WP_Table_Builder as NS;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class List_Element extends Element_Base_Object {
    
    /**
	 * Get element name.
	 *
	 * Retrieve list editor element name.
	 *
	 * @since 1.1.2
	 * @access public
	 *
	 * @return string element name.
	 */
	public function get_name() {
		return 'list';
	}

	/**
	 * Get element title.
	 *
	 * Retrieve button editor element.
	 *
	 * @since 1.1.2
	 * @access public
	 *
	 * @return string Element title.
	 */
	public function get_title() {
		return esc_html_e( 'List', 'wp-table-builder' );
	}

	/**
	 * Get directory icon.
	 *
	 * Retrieve directory list-item editor element icon.
	 *
	 * @since 1.1.2
	 * @access public
	 *
	 * @return string Directory Element icon.
	 */
	public function get_directory_icon() {
		return NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/icons/list.svg'; ;
	}
    
    /**
	 * Get url icon.
	 *
	 * Return url list-item icon
	 *
	 * @since 1.1.2
	 * @access public
	 *
	 * @return string Url Element icon.
	 */
	public function get_url_icon() {
		return wp_normalize_path ( NS\WP_TABLE_BUILDER_URL . 'inc/admin/views/builder/icons/list.svg' );
	}
    
    /**
	 * Include file with js script for element list
	 *
	 * @since 1.1.2
	 * @access protected
	 */
    public function element_script() {
        return wp_normalize_path ( NS\WP_TABLE_BUILDER_DIR . 'inc/admin/element-classes/element-scripts/list-element.js' );
    }
    
    /**
	 * Register the element controls.
	 *
	 * Adds different fields to allow the user to change and customize the element settings.
	 *
	 * @since 1.1.2
	 *
	 * @access protected
	 */
	protected function _register_controls() {
		$this->add_control(
			'section_header',
			[
				'label' => __( 'List Options', 'wp_table_builder' ),
				'type' => Controls_Manager::SECTION_HEADER,
			]
		);
        
		$this->add_control(
			'select1',
			[
				'label' => __( 'List Type', 'wp_table_builder' ),
				'type' => Controls_Manager::SELECT,
                'options' => [
                    ['Ordered', 'numbered'],
                    ['Unordered', 'unordered']
                ],
                'selectedDefault' => 0,
			]
		);
        
		$this->add_control(
			'select2',
			[
				'label' => __( 'List Icon', 'wp_table_builder' ),
				'type' => Controls_Manager::SELECT,
                'options' => [
                    ['Circle', 'circle'],
                    ['Square', 'square'],
                    ['Disc', 'disc'],
                    ['None', 'none']
                ],
                'selectedDefault' => 2,
                'appearDependOn' => ['select1', ['unordered'], ['numbered']]
			]
		);

		$this->add_control(
			'listColor',
			[
				'label' => __( 'List Font Color', 'wp_table_builder' ),
				'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{{data.container}}} ul li p' => 'color',
                ]
			]
		);
        
		$this->add_control(
			'listAlignment',
			[
				'label' => __( 'List Alignment', 'wp_table_builder' ),
				'type' => Controls_Manager::ELEMENT_ALIGNMENT,
                'selected' => 0,
                'selectors' => [
                    '{{{data.container}}} ul li p' => 'text-align',
                ]
			]
		);
	}
    
    /**
	 * Render text editor element output in the editor.
	 *
	 * Written as a wp js template and used to generate the live preview.
	 *
	 * @since 1.1.2
	 * @access protected
	 */
	protected function _content_template() {
		?>
        <ul>
            <li class="wptb-in-element">
                <div class="wptb-list-item-content" 
                     style="position: relative;" spellcheck="false" contenteditable="true">
                    <p data-list-style-type-index="1."><?php esc_html_e( 'List Item 1', 'wp-table-builder' ); ?></p>
                </div>
            </li>
            <li class="wptb-in-element">
                <div class="wptb-list-item-content" 
                     style="position: relative;" spellcheck="false" contenteditable="true">
                    <p data-list-style-type-index="2."><?php esc_html_e( 'List Item 2', 'wp-table-builder' ); ?></p>
                </div>
            </li>
            <li class="wptb-in-element">
                <div class="wptb-list-item-content" 
                     style="position: relative;" spellcheck="false" contenteditable="true">
                    <p data-list-style-type-index="3."><?php esc_html_e( 'List Item 3', 'wp-table-builder' ); ?></p>
                </div>
            </li>
        </ul>
		<?php
	}
}

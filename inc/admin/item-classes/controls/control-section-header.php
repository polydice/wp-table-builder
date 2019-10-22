<?php
namespace WP_Table_Builder\Inc\Admin\Item_Classes\Controls;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * WP Table Builder section header control.
 *
 * A control class for creating Section Header control.
 *
 * @since 1.1.2
 */
class Control_Section_Header extends Base_Control {
    /**
	 * Get control type.
	 *
	 * @since 1.1.2
	 * @access public
	 *
	 * @return string Control type.
	 */
	public function get_type() {
		return 'section_header';
	}

	/**
	 * Enqueue size control scripts and styles.
	 *
	 * Used to register and enqueue custom scripts and styles used by the size
	 * control.
	 *
	 * @since 1.1.2
	 * @access public
	 */
	public function enqueue() {
        
	}

	/**
	 * Render color control output in the editor.
	 *
	 * Used to generate the control HTML in the editor wp js template
	 *
	 * @since 1.1.2
	 * @access public
	 */
	public function content_template() {
		?>
        <div class="wptb-settings-dropdown">
            <div class="wptb-back-button">
                 <a href="javascript:void(0)"  title="Back" class="wptb-exit-options" >
                <svg pointer-events="none" width="12px" height="12px" x="0px" y="0px" viewBox="0 0 477.175 477.175" 
                     style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
                    <g>
                        <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </a>
            </div>
            <div class="wptb-option-text">{{{data.label}}}</div>   
        </div>
		<?php
	}
}
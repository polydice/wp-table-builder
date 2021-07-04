<?php

namespace WP_Table_Builder\Inc\Admin\Managers;


use DOMDocument;
use DOMXPath;
use WP_Table_Builder\Inc\Admin\Base\Setting_Base;
use WP_Table_Builder\Inc\Common\Helpers;
use WP_Table_Builder\Inc\Common\Traits\Ajax_Response;
use WP_Table_Builder\Inc\Common\Traits\Init_Once;
use WP_Table_Builder\Inc\Common\Traits\Singleton_Trait;
use WP_Table_Builder as NS;
use function add_action;
use function add_filter;
use function admin_url;
use function apply_filters;
use function check_ajax_referer;
use function current_user_can;
use function do_action;
use function esc_html__;
use function update_option;
use function wp_create_nonce;
use function wp_kses_stripslashes;

// if called directly, abort
if ( ! defined( 'WPINC' ) ) {
	die();
}

/**
 * Class Lazy_Load_Manager
 *
 * Class for maintaining lazy load functionality on client side tables.
 * @package WP_Table_Builder\Inc\Admin\Managers
 */
class Lazy_Load_Manager extends Setting_Base {
	use Singleton_Trait;
	use Ajax_Response;
	use Init_Once;

	/**
	 * Options and settings required for lazy load to work at frontend.
	 * @var array
	 */
	private static $frontend_options = [
		'visibilityPercentage' => 10,
		'backgroundColor'      => '#FFFFFF00',
		'iconName'             => [
			'name' => null,
		],
		'iconColor'            => '#000000',
		'iconSize'             => 20,
		'iconAnimation'        => 'none',
	];

	/**
	 * Get id of settings.
	 *
	 * @return string settings id
	 */
	public function get_settings_id() {
		return 'wptb_lazy_load';
	}

	/**
	 * Options related to inner workings of frontend part of component.
	 * @return array frontend options
	 */
	public static function get_frontend_options() {
		return static::$frontend_options;
	}

	/**
	 * Get default settings.
	 *
	 * @return array default settings array
	 */
	protected function get_default_settings() {
		return [
			'enabled' => false,
		];
	}

	/**
	 * Get sanitization rules for component options.
	 * @return array sanitization rules
	 */
	protected function get_sanitization_rules() {
		return [
			'enabled' => 'rest_sanitize_boolean'
		];
	}

	/**
	 * Initialize lazy load manager.
	 */
	public static function init_process() {
		add_filter( 'wp-table-builder/filter/settings_manager_frontend_data', [
			__CLASS__,
			'add_settings_menu_data'
		] );
		add_action( 'wp_ajax_' . static::get_instance()->get_settings_id(), [ __CLASS__, 'update_settings' ] );
		add_filter( 'wp-table-builder/filter/wptb_frontend_data', [ __CLASS__, 'prepare_frontend_data' ] );
		add_filter( 'wp-table-builder/filter/table_html_shortcode', [ __CLASS__, 'table_html_shortcode' ] );

		static::get_instance()->register_settings( esc_html__( 'lazy load settings', 'wp-table-builder' ) );
	}

	/**
	 * Callback for generating table html at shortcode.
	 *
	 * @param string $html table html
	 *
	 * @return string table shortcode html
	 */
	public static function table_html_shortcode( $html, $force = false ) {
		$is_lazy_load_enabled = $force || static::get_instance()->get_settings()['enabled'];

		if ( $is_lazy_load_enabled ) {
			$dom_handler   = new DOMDocument();
			$handle_status = @$dom_handler->loadHTML( $html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD | LIBXML_NOWARNING | LIBXML_NOERROR );

			if ( $handle_status ) {
				$dom_query      = new DOMXPath( $dom_handler );
				$image_elements = $dom_query->query( '//div[@class="wptb-image-wrapper"]//img' );
				foreach ( $image_elements as $img ) {
					$target_url = $img->getAttribute( 'src' );

					$img->setAttribute( 'data-wptb-lazy-load-target', $target_url );
					$img->setAttribute( 'src', '' );
					$img->setAttribute( 'class', join( ' ', [ $img->getAttribute( 'class' ), 'wptb-lazy-load-img' ] ) );
					$img->setAttribute( 'data-wptb-lazy-load-status', 'false' );
				}
				$html = $dom_handler->saveHTML();
			}
		}


		return $html;
	}

	/**
	 * Prepare frontend data for lazy load.
	 *
	 * @param array $data frontend data
	 *
	 * @return array frontend data
	 */
	public static function prepare_frontend_data( $data ) {
		$data['lazyLoad'] = static::get_lazy_load_settings();

		return $data;
	}

	/**
	 * Get settings for lazy load component.
	 *
	 * @return array lazy load settings
	 */
	public static function get_lazy_load_settings() {
		$settings = array_merge( static::get_instance()->get_settings(), static::$frontend_options );

		return apply_filters( 'wp-table-builder/filter/lazy_load_settings', $settings );
	}

	/**
	 * Update settings through ajax endpoint.
	 */
	public static function update_settings() {
		$instance = static::get_instance();
		if ( current_user_can( Settings_Manager::ALLOWED_ROLE_META_CAP ) && check_ajax_referer( $instance->get_settings_id(), 'nonce', false ) && isset( $_POST['settings'] ) ) {
			$updated_settings = json_decode( wp_kses_stripslashes( $_POST['settings'] ), true );
			update_option( $instance->get_settings_id(), $updated_settings );

			do_action( 'wp-table-builder/action/lazy_load_settings_updated', $updated_settings );

			$instance->set_message( esc_html__( 'Lazy load options updated.', 'wp-table-builder' ) );
		} else {
			$instance->set_error( esc_html__( 'An error occurred with your request, try again later.', 'wp-table-builder' ) );
		}

		$instance->send_json( true );
	}

	/**
	 * Add settings menu header data for lazy load.
	 *
	 * @param array $settings_data settings data
	 *
	 * @return array modified settings menu data with lazy load header info
	 */
	public static function add_settings_menu_data( $settings_data ) {
		$instance = static::get_instance();

		$settings_data['sectionsData']['lazyLoad'] = [
			'label'    => esc_html__( 'lazy load', 'wp-table-builder' ),
			'priority' => 10,
		];

		$settings_data['strings'] = array_merge( $settings_data['strings'], [
			'enableLazyLoad'          => esc_html__( 'Enable lazy load for table image elements', 'wp-table-builder' ),
			'submit'                  => esc_html__( 'submit', 'wp-table-builder' ),
			'visibilityPercentage'    => esc_html__( 'visibility percentage', 'wp-table-builder' ),
			'visibilityPercentageTip' => esc_html__( 'Height of image that is visible on screen to trigger lazy load', 'wp-table-builder' ),
			'backgroundColor'         => esc_html__( 'background color', 'wp-table-builder' ),
			'icon'                    => esc_html__( 'Icon', 'wp-table-builder' ),
			'iconColor'               => esc_html__( 'Icon Color', 'wp-table-builder' ),
			'iconSize'                => esc_html__( 'icon size', 'wp-table-builder' ),
			'iconAnimation'           => esc_html__( 'Icon Animation', 'wp-table-builder' ),
			'generalOptions'          => esc_html__( 'general options', 'wp-table-builder' ),
			'iconOptions'             => esc_html__( 'icon options', 'wp-table-builder' ),
		] );

		$extraDataSettingsOptions = [
			'iconAnimationOptions' => [
				'none' => esc_html__( 'None', 'wp-table-builder' )
			]
		];

		$settings_preview_table = sprintf( '<div class="wptb-image-wrapper"><img src="%1s"></div>', path_join( NS\WP_TABLE_BUILDER_URL, 'assets/images/wptb-logo-new.png' ) );

		$settings_data['data']['lazyLoad'] = [
			'proStatus'    => Addon_Manager::check_pro_status(),
			'settings'     => array_merge( static::get_lazy_load_settings(), $extraDataSettingsOptions ),
			'security'     => [
				'action'  => $instance->get_settings_id(),
				'nonce'   => wp_create_nonce( $instance->get_settings_id() ),
				'ajaxUrl' => admin_url( 'admin-ajax.php' )
			],
			'previewTable' => static::table_html_shortcode( $settings_preview_table, true )
		];

		return $settings_data;
	}
}

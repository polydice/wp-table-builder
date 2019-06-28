<?php
/**
 * Builder Left Panel
 */

use WP_Table_Builder as NS;

?>

<div class="wptb-left-panel">
    <div class="wptb-left-scroll-panel">
        <div class="wptb-panel-left">
            <div class="wptb-elements-section">
                <div class="add-elements wptb-tab-content">
                    <div class="wptb-elements-container">
                        <div class="wptb-element left " draggable="true" data-wptb-element="text"  id="wptb-text">
                            <?php require_once NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/icons/text.php'; ?>
                            <p class="wptb-draggable"><?php echo __( 'Text', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-element right  " draggable="true" data-wptb-element="image"  id="wptb-image">
                            <?php require_once NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/icons/image.php'; ?>
                            <p class="wptb-draggable-prototype"><?php echo __( 'Image', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-element left " draggable="true" data-wptb-element="button"  id="wptb-button">
                            <?php require_once NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/icons/button.php'; ?>
                            <p class="wptb-draggable-prototype"><?php echo __( 'Button', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-element right " draggable="true" data-wptb-element="list"  id="wptb-list">
                            <?php require_once NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/icons/list.php'; ?>
                            <p class="wptb-draggable-prototype"><?php echo __( 'List', 'wp-table-builder' ); ?></p>
                        </div>
                    </div>              
                </div>
            </div>
            
            <div class="wptb-settings-section">
                <div class="wptb-settings-dropdown">
                    <?php echo __( 'Table Settings', 'wp-table-builder' ); ?>
                </div>
                <?php require_once NS\WP_TABLE_BUILDER_DIR . 'inc/admin/views/builder/wptb-builder-table-settings.php'; ?>
            </div>
            
            <div id="element-options-group" class="wptb-tab-content" style="display: none;">
                <!-- all copies of properties will be here -->
            </div>
            
            <div class='wptb-protoypes-options' style='display: none;'>
                <!-- Here's a prototype of each Elements's option --> 
                <div class='wptb-element-options wptb-text-options wptb-text-options-prototype' style='display: none;'>
                    <div class="wptb-settings-dropdown">
                        <?php echo __( 'Text Options', 'wp-table-builder' ); ?>
                    </div>
                    <div class="wptb-element-option wptb-settings-items" >
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Font Size', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="margin: 9px 0; padding-bottom: 10px;">
                            <div class="wptb-settings-col-xs-8">
                              <input   data-type="font-size" class="wptb-text-font-size-slider wptb-element-property" type="range"   min="10" max="50" step="1" value="13"> 
                            </div>
                            <div class="wptb-settings-col-xs-4">
                                <input id="wptb-text-font-size-number" data-type="font-size"  class="wptb-text-font-size-number wptb-number-input wptb-element-property" type="number" min="10" max="50" step="1" placeholder="10" pattern="[0-9]*"><span class="wptb-input-px">px</span>
                            </div>
                        </div>
                    </div>
                    <div class="wptb-element-option wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Font Color', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-top: 25px; padding-bottom: 10px;">
                            <div class='wptb-settings-col-xs-8'>
                                <input type="text" class="wptb-element-property wptb-color-picker" data-type="color"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='wptb-element-options  wptb-image-options wptb-image-options-prototype' style='display: none;'>
                    <div class="wptb-settings-dropdown">
                        <?php echo __( 'Image Options', 'wp-table-builder' ); ?>
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Image Alignment', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin-top: 10px;">
                                <select data-type="image-alignment" class="wptb-element-property">
                                    <option value="left"><?php echo __( 'Left', 'wp-table-builder' ); ?></option>
                                    <option value="center"><?php echo __( 'Center', 'wp-table-builder' ); ?></option>
                                    <option value="right"><?php echo __( 'Right', 'wp-table-builder' ); ?></option>
                                </select>
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-element-option wptb-settings-items" style="margin-top: 5px;">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Image Size', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 12px; padding-top: 23px;">
                            <div class="wptb-settings-col-xs-8">
                              <input data-type="image-size" class="wptb-image-width wptb-element-property  wptb-image-size-slider" type="range" min="10" max="100" step="1" value="100"> 
                            </div>
                            <div class="wptb-settings-col-xs-4">
                                <input id="wptb-image-width-number" data-type="image-size"  class="wptb-image-width-number wptb-image-width wptb-number-input wptb-element-property" type="number" min="10" max="100" step="1" placeholder="100" pattern="[0-9]*"><span class="wptb-input-px">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Image Link', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin: 15px 0;">
                                <input type="text" data-type="image-link" placeholder="<?php echo __( 'Insert Link Here', 'wp-table-builder' ); ?>" class="wptb-element-property" />
                            </div>
                            <div class='wptb-settings-col-xs-8'>
                                <input type="checkbox" data-type="image-link-target" id="image-link-target" class="wptb-element-property" />
                                <label for="image-link-target"><?php echo __( 'Open Link in New Tab', 'wp-table-builder' ); ?></label>
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-element-option wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Image Alternative Text', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 14px; padding-top: 25px;">
                            <div class="wptb-settings-col-xs-12">
                                <input id="wptb-image-alternative-text" data-type="alternative-text"  class="wptb-element-property wptb-image-height" type="text"  placeholder="Image Alt Text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='wptb-element-options wptb-button-options wptb-button-options-prototype' style='display: none;'>
                    <div class="wptb-settings-dropdown">
                        <?php echo __( 'Button Options', 'wp-table-builder' ); ?>
                    </div>
                    <div class="wptb-element-option wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Size', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 0px">
                            <ul>
                                <li class="wptb-btn-size-btn wptb-element-property wptb-btn-size-switcher">S</li>
                                <li class="wptb-btn-size-btn wptb-element-property wptb-btn-size-switcher selected">M</li>
                                <li class="wptb-btn-size-btn wptb-element-property wptb-btn-size-switcher">L</li>
                                <li class="wptb-btn-size-btn wptb-element-property wptb-btn-size-switcher">XL</li>
                            </ul>
                        </div>
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Text Color', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="margin-top: 9px; padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin-top: 5px;">
                                <input data-type="button-text-color" class="wptb-element-property wptb-color-picker" />
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Color', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="margin-top: 9px; padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin-top: 5px;">
                                <input data-type="button-color" class="wptb-element-property wptb-color-picker" />
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Link', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin: 15px 0;">
                                <input type="text" data-type="button-link" placeholder="<?php echo __( 'Insert Link Here', 'wp-table-builder' ); ?>" class="wptb-element-property" />
                            </div>
                            <div class='wptb-settings-col-xs-8'>
                                <input type="checkbox" data-type="button-link-target" id="button-link-target" class="wptb-element-property" />
                                <label for="button-link-target"><?php echo __( 'Open Link in New Tab', 'wp-table-builder' ); ?></label>
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Id', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin: 15px 0;">
                                <input type="text" data-type="button-id" placeholder="<?php echo __( 'Insert Button Id Here', 'wp-table-builder' ); ?>" class="wptb-element-property" />
                            </div>
                        </div>    
                    </div>
                    <div class="wptb-settings-items">
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'Button Alignment', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 10px">
                            <div class='wptb-settings-col-xs-8' style="margin-top: 10px;">
                                <select data-type="button-alignment" class="wptb-element-property">
                                    <option value="left"><?php echo __( 'Left', 'wp-table-builder' ); ?></option>
                                    <option value="center"><?php echo __( 'Center', 'wp-table-builder' ); ?></option>
                                    <option value="right"><?php echo __( 'Right', 'wp-table-builder' ); ?></option>
                                </select>
                            </div>
                        </div>    
                    </div>
                </div>
                <div class='wptb-element-options wptb-list-options wptb-list-options-prototype' style='display: none;'>
                    <div class="wptb-settings-dropdown">
                        <?php echo __( 'List Options', 'wp-table-builder' ); ?>
                    </div>
                    <div class="wptb-settings-items" >
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'List Type', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 15px; padding-top: 25px;">
                            <select data-type="list-class" class="wptb-element-property"> 
                                <option value="numbered">
                                    <?php echo __( 'Ordered', 'wp-table-builder' ); ?>
                                </option>
                                <option value="unordered">
                                    <?php echo __( 'Unordered', 'wp-table-builder' ); ?>
                                </option>
                            </select>              
                        </div>
                        <div class='wptb-settings-item-header wptb-list-icon-select-label' id="wptb-list-icon-select-label" style="display: none">
                            <p class="wptb-settings-item-title"><?php echo __( 'List Icon', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 15px; padding-top: 25px; display: none;">
                            <select data-type="list-style-type" class="wptb-element-property">
                                <option value="circle">
                                    <?php echo __( 'Circle', 'wp-table-builder' ); ?>
                                </option>
                                <option value="square">
                                    <?php echo __( 'Square', 'wp-table-builder' ); ?>
                                </option>
                                <option value="disc">
                                    <?php echo __( 'Disc', 'wp-table-builder' ); ?>
                                </option>
                                <option value="none">
                                    <?php echo __( 'None', 'wp-table-builder' ); ?>
                                </option>
                            </select>
                        </div>
                        
                    <!--<div class="wptb-element-option wptb-settings-items">-->
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'List Font Color', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-top: 25px; padding-bottom: 10px;">
                            <div class='wptb-settings-col-xs-8'>
                                <input type="text" class="wptb-element-property wptb-color-picker" data-type="list-text-color"/>
                            </div>
                        </div>
                    <!--</div>-->
                        <div class='wptb-settings-item-header' >
                            <p class="wptb-settings-item-title"><?php echo __( 'List Alignment', 'wp-table-builder' ); ?></p>
                        </div>
                        <div class="wptb-settings-row wptb-settings-middle-xs" style="padding-bottom: 15px; padding-top: 25px;">
                            <select data-type="list-alignment" class="wptb-element-property"> 
                                <option value="left">
                                    <?php echo __( 'Left', 'wp-table-builder' ); ?>
                                </option>
                                <option value="center">
                                    <?php echo __( 'Center', 'wp-table-builder' ); ?>
                                </option>
                                <option value="right">
                                    <?php echo __( 'Right', 'wp-table-builder' ); ?>
                                </option>
                            </select>              
                        </div>
                    </div>
                </div>
            </div>     
        </div>  
    </div>
    <div id="wptb-left-scroll-panel-curtain">
        <p>You are currently editing the table cells. Click "Close" to go back to editing the table.</p>
        <p>Click on cells to select them or deselect them. Selected cells will be shown in a green outline.</p>
        <div>
            <button id="wptb-left-scroll-panel-curtain-close" class="table_change_button" title="Close Manage Cells Mode">Close</button>
        </div>
    </div>
    <a href="javascript:void(0)" class="wptb-left-panel-extend" data-fn="togglePanel" data-title-collapsed="Expand panel" data-title-expanded="Collapse panel" title="Collapse panel">
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512" height="512" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve" class=""><g transform="matrix(-1, 1.22465e-16, -1.22465e-16, -1, 357, 357)"><g>
            <g id="play-arrow">
                <polygon points="38.25,0 38.25,357 318.75,178.5   " data-original="#000000" class="active-path" style="fill:#3B7EC0" data-old_color="##3B7EC"></polygon>
            </g>
            </g></g> 
        </svg>
    </a>
</div>

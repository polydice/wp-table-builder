( function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
         * 
         * The file is enqueued from inc/frontend/class-frontend.php.
	 */
        
    

})( jQuery );

jQuery( document ).ready( function ( $ ) {
    /**
     * function wptb_tableContainerSectionSmall
     * add class ( wptb-section-small ) in small width
     * remove this class in large width
     * @returns {void}
     */
    function wptb_tableContainerSectionSmall() {
        let wptbTableContainer = jQuery(".wptb-table-container");
        let sw = wptbTableContainer.width();
        if( wptbTableContainer.length > 0 ) {
            if (sw < 480) {
                wptbTableContainer.addClass("wptb-section-small");
            } else {
                wptbTableContainer.removeClass("wptb-section-small");
            }
        }
    } 
    
    /**
     * function wptb_tableGenerateMobile
     * generates a mobile view of the table 
     * when the top row of the table is not a heading
     * @returns {void}
     */
    function wptb_tableGenerateMobile() {
        let wptbTableContainer = document.getElementsByClassName( 'wptb-table-container' );
        let wptbPreviewTable = document.getElementsByClassName( 'wptb-preview-table' );
        let wptbPreviewTableMobile = document.getElementsByClassName( 'wptb-preview-table-mobile' );
        if( wptbTableContainer.length > 0 && wptbPreviewTable.length > 0 ) {
            let sw = wptbTableContainer[0].offsetWidth;
            if (sw < 480) {
                wptbPreviewTable[0].style.display = 'none';
                
                if( wptbPreviewTableMobile.length == 0 ) {
                    let tableRows = wptbPreviewTable[0].rows;
                    let tableRowTop = tableRows[0];
                    let tableRowTopChildren = tableRowTop.children;
                    let columnCount = 0;

                    for( let i = 0; i < tableRowTopChildren.length; i++ ) {
                        columnCount += tableRowTopChildren[i].colSpan;
                    }

                    let newTableArray = [];

                    for( let i = 0; i < columnCount; i++ ) {
                        newTableArray[i] = [];
                    }
                    
                    for( let i = 0; i < tableRows.length; i++ ) {
                        let rowChildren = tableRows[i].children;

                        for( let j = 0; j < columnCount; j++ ) {
                            if( rowChildren[j].dataset.xIndex == j ) {
                                let tdNew = rowChildren[j].cloneNode( true );
                                if ( tableRows[i].style.backgroundColor ) {
                                    tdNew.style.backgroundColor = tableRows[i].style.backgroundColor;
                                }
                                newTableArray[j].push( tdNew );
                            } else {
                                newTableArray[j].push( '' );
                            }
                        }
                    }
                    
                    let table = document.createElement( 'table' );
                    table.classList.add( 'wptb-preview-table-mobile' );
                    let tableStyle = wptbPreviewTable[0].getAttribute( 'style' );
                    table.setAttribute( 'style', tableStyle );
                    table.style.display = 'table';
                    for ( let i = 0; i < columnCount; i++ ) {
                        let row = table.insertRow(-1);
                        row.classList.add( 'wptb-row' );
                        
                        for ( let j = 0; j < tableRows.length; j++ ) {
                            if( newTableArray[i][j] ) {
                                row.appendChild( newTableArray[i][j] );
                            }
                        }
                    }
                    
                    wptbTableContainer[0].appendChild( table );
                } else {
                    wptbPreviewTableMobile[0].style.display = 'table';
                }
                
            } else {
                wptbPreviewTable[0].style.display = 'table';
                if( wptbPreviewTableMobile.length > 0 ) {
                    wptbPreviewTableMobile[0].style.display = 'none';
                }
                
            }
        }
    }
    
    let wptbPreviewTable = document.getElementsByClassName( 'wptb-preview-table' );
    if ( wptbPreviewTable.length > 0 ) {
        wptbPreviewTable[0].style.display = 'table';
        if( wptbPreviewTable[0].classList.contains( 'wptb-table-preview-head' ) ) {
            wptb_tableReconstraction();
        } else {
            wptb_tableGenerateMobile();
            wptb_tableContainerSectionSmall();
        }

        //when window resize call wpcd_archiveSectionSmall and wptb_tableGenerateMobile
        $( window ).resize( function () {
            if( wptbPreviewTable[0].classList.contains( 'wptb-table-preview-head' ) ) {
                wptb_tableReconstraction();
            } else {
                wptb_tableGenerateMobile();
                wptb_tableContainerSectionSmall();
            }
        });
    }
    
    function wptb_tableReconstraction() {
        let tableContainer = document.getElementsByClassName( 'wptb-table-container' );
        let previewTable = document.getElementsByClassName( 'wptb-preview-table' );
        let tableContainerMatrix = document.getElementsByClassName( 'wptb-table-container-matrix' );
        if( tableContainerMatrix.length > 0 ) {
            tableContainerMatrix = tableContainerMatrix[0];
        }
        let createNewTableIndic = true;
        if( previewTable.length > 0 && tableContainer.length > 0 ) {
            tableContainer = tableContainer[0];
            previewTable = previewTable[0];
            if( previewTable.dataset.reconstraction == 1 ) {
                let tableContainerWidth = tableContainer.offsetWidth;
                let previewTableWidth = previewTable.offsetWidth;
                if( tableContainerWidth < previewTableWidth ) {
                    tableContainer.style.overflow = 'unset';
                    if( tableContainerMatrix ) tableContainerMatrix.classList.add( 'matrix-hide' );
                    
                    let tableColumns = previewTable.dataset.tableColumns;
                    if( tableColumns ) {
                        let tdWidth = previewTableWidth / tableColumns;
                        let wholeColumnsInContainer = Math.floor( tableContainerWidth/tdWidth );
                        if( document.getElementsByClassName( 'wptb-preview-table-mobile-head' ).length > 0 ) {
                            let wptbPreviewTableMobileHead = document.getElementsByClassName( 'wptb-preview-table-mobile-head' )[0];
                            wptbPreviewTableMobileHead.classList.remove( 'mobile-head-hide' );
                            let dataWholeColumnInContainer = wptbPreviewTableMobileHead.dataset.wholeColumnsInContainer;
                            if( dataWholeColumnInContainer == wholeColumnsInContainer ) {
                                createNewTableIndic = false;
                            } else {
                                wptbPreviewTableMobileHead.parentNode.removeChild( wptbPreviewTableMobileHead );
                            }
                        }
                        
                        if( createNewTableIndic ) {
                            let newTable = document.createElement( 'table' );
                            newTable.classList.add( 'wptb-preview-table-mobile-head' );

                            let tableRows = previewTable.rows.length;
                            let tableRowsWithoutHeader = tableRows - 1;
                            let newTableColumnsWithoutLeftHeader;
                            let newTalbeLastSectionFilledColumns;
                            
                            let valuesIsSaved = false;
                            
                            for( let i = 0; i < tableRowsWithoutHeader; i++ ) {
                                newTableColumnsWithoutLeftHeader = wholeColumnsInContainer - 1 - i;
                                if( newTableColumnsWithoutLeftHeader == 0 ) newTableColumnsWithoutLeftHeader = 1;
                                newTalbeLastSectionFilledColumns = tableRowsWithoutHeader % newTableColumnsWithoutLeftHeader;

                                if( newTalbeLastSectionFilledColumns == 0 ) {
                                    valuesIsSaved = true;
                                    break;
                                } else if( newTableColumnsWithoutLeftHeader - 2 * newTalbeLastSectionFilledColumns < 0 ) {
                                    valuesIsSaved = true;
                                    continue;
                                } else {
                                    if( valuesIsSaved ) {
                                        newTableColumnsWithoutLeftHeader = newTableColumnsWithoutLeftHeader + 1;
                                        newTalbeLastSectionFilledColumns = tableRowsWithoutHeader % newTableColumnsWithoutLeftHeader;
                                        break;
                                    } else {
                                        continue;
                                    }
                                }
                            }
                            
                            if( valuesIsSaved && newTableColumnsWithoutLeftHeader ) {
                                let countRows = tableColumns * Math.ceil( tableRowsWithoutHeader / newTableColumnsWithoutLeftHeader );
                                console.log(countRows);
                                for( let j = 0; j < countRows; j++ ) {
                                    let sectionNumber = Math.floor( j / tableColumns ),
                                        tr = document.createElement( 'tr' ),
                                        tdLeftHeader = previewTable.rows[0].children[j - sectionNumber*tableColumns].cloneNode( true ),
                                        td;
                                    tdLeftHeader.style.backgroundColor = previewTable.rows[0].style.backgroundColor;
                                    if( sectionNumber > 0 && j % tableColumns == 0 ) {
                                        tdLeftHeader.style.borderTopWidth = '5px';
                                        tdLeftHeader.classList.add( 'linear-gradient' );
                                    }
                                    tr.appendChild( tdLeftHeader );

                                    for( let k = newTableColumnsWithoutLeftHeader*( sectionNumber ) + 1; k < newTableColumnsWithoutLeftHeader*( sectionNumber + 1) + 1; k++ ) {
                                        if( k < previewTable.rows.length ) {
                                            td = previewTable.rows[k].children[j - sectionNumber*tableColumns].cloneNode( true );
                                            td.style.backgroundColor = previewTable.rows[k].style.backgroundColor;
                                            td.style.border
                                        } else {
                                            td = document.createElement( 'td' );
                                            td.style.borderWidth = '0px';
                                            td.style.borderColor = previewTable.querySelector( 'td' );
                                            if( sectionNumber > 0 && j % tableColumns == 0 ) {
                                                td.style.borderColor = previewTable.querySelector( 'td' ).style.borderColor;
                                            }
                                            td.style.background = '#fff';
                                        }

                                        if( sectionNumber > 0 && j % tableColumns == 0 ) {
                                            td.style.borderTopWidth = '5px';
                                            td.classList.add( 'linear-gradient' );
                                        }

                                        tr.appendChild( td );
                                    }

                                    newTable.appendChild( tr );
                                }

                                newTable.dataset.wholeColumnsInContainer = wholeColumnsInContainer;
                                tableContainer.appendChild( newTable );
                            }
                        }
                    }
                } else {
                    if( tableContainerMatrix ) tableContainerMatrix.classList.remove( 'matrix-hide' );
                    if( document.getElementsByClassName( 'wptb-preview-table-mobile-head' ).length > 0 ) {
                        document.getElementsByClassName( 'wptb-preview-table-mobile-head' )[0].classList.add( 'mobile-head-hide' );
                    }
                    tableContainer.style.overflow = 'auto';
                }
            }
        }
    }
    
});

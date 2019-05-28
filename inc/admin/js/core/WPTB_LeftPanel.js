var WPTB_LeftPanel = function () {

    var table = document.getElementsByClassName('wptb-preview-table')[0],
        wptbElementButtons = document.getElementsByClassName('wptb-element');
    
    function wptbTdBgColorSavedSet( inputId, trNumber ) {
        if ( trNumber > 3 ) return;
        let tableRows = table.getElementsByTagName('tr');
        if ( tableRows.length > trNumber ) {
            let trBackgroundColor = tableRows[trNumber].style.backgroundColor;
            var wptbEvenRowBg = document.getElementById(inputId);
            if ( wptbEvenRowBg && trBackgroundColor ) {
                wptbEvenRowBg.value = WPTB_Helper.rgbToHex( trBackgroundColor );
            }
//            let td = tableRows[trNumber].querySelector( 'td' );
//            if ( td ) {
//                let tdBackgroundColor = td.style.backgroundColor;
//                let wptbEvenRowBg = document.getElementById( inputId );
//                if( wptbEvenRowBg && tdBackgroundColor ) {
//                    wptbEvenRowBg.value = tdBackgroundColor;
//                }
//            }
        }
    }
    
    wptbTdBgColorSavedSet( 'wptb-even-row-bg', 1 );
    jQuery('#wptb-even-row-bg').wpColorPicker({
        change: function ( event, ui ) {
            var tableRows = table.getElementsByTagName('tr');
            for ( let i = 1; i < tableRows.length; i += 2 ) {
                tableRows[i].style.backgroundColor = ui.color.toString();
//                tds = tableRows[i].getElementsByTagName( 'td' );
//                for ( let j = 0; j < tds.length; j++ ) {
//                    tds[j].style.backgroundColor = ui.color.toString();
//                }
            }
        },
        clear: function(){
            var tableRows = table.getElementsByTagName('tr');
            for ( let i = 1; i < tableRows.length; i += 2 ) {
                tableRows[i].style.backgroundColor = '';
                let tds = tableRows[i].getElementsByTagName('td');
                for ( let j = 0; j < tds.length; j++ ) {
                    tds[j].style.backgroundColor = '';
                }
            }
        },

    });
    
    wptbTdBgColorSavedSet( 'wptb-odd-row-bg', 2 );
    jQuery('#wptb-odd-row-bg').wpColorPicker({
        change: function ( event, ui ) {
            var tableRows = table.getElementsByTagName('tr');
            for ( let i = 2; i < tableRows.length; i += 2 ) {
                tableRows[i].style.backgroundColor = ui.color.toString();
//                let tds = tableRows[i].getElementsByTagName( 'td' );
//                for ( let j = 0; j < tds.length; j++ ) {
//                    tds[j].style.backgroundColor = ui.color.toString();
//                }
            }
        },
        clear: function(){
            var tableRows = table.getElementsByTagName('tr');
            for ( let i = 2; i < tableRows.length; i += 2 ) {
                tableRows[i].style.backgroundColor = '';
                let tds = tableRows[i].getElementsByTagName( 'td' );
                for ( var j = 0; j < tds.length; j++ ) {
                    tds[j].style.backgroundColor = '';
                }
            }
        },
    });
    
    wptbTdBgColorSavedSet( 'wptb-table-header-bg', 0 );
    jQuery('#wptb-table-header-bg').wpColorPicker({
        change: function (event, ui) {
            var tableHeader = table.getElementsByTagName('tr')[0];
            tableHeader.style.backgroundColor = ui.color.toString();
//                tds = tableHeader.getElementsByTagName('td');
//            for (var j = 0; j < tds.length; j++) {
//                tds[j].style.backgroundColor = ui.color.toString();
//            }
        },
        clear: function(){
            var tableHeader = table.getElementsByTagName('tr')[0];
            tableHeader.style.backgroundColor = '';
            let tds = tableHeader.getElementsByTagName('td');
            for (var j = 0; j < tds.length; j++) {
                tds[j].style.backgroundColor = '';
            }
        },
    });
    
    function tableBorderColorWidthSavedSet() {
        let table = document.getElementsByClassName('wptb-preview-table');
        if ( table.length > 0 ) {
            let tableBorderColor = table[0].style.borderColor;
            if ( tableBorderColor ) {
                let tableBorderColorInput = document.getElementById( 'wptb-table-border-color' );
                if ( tableBorderColorInput ) {
                    tableBorderColorInput.value = WPTB_Helper.rgbToHex( tableBorderColor );
                }
            }
            
            let tableBorderWidth = table[0].style.borderWidth;
            if ( tableBorderWidth ) {
                let wptbTableBorderWidthSlider = document.getElementById('wptb-table-border-slider'),
                    wptbTableBorderWidthNumber = document.getElementById('wptb-table-border-number');
                
                if ( wptbTableBorderWidthSlider ) {
                    wptbTableBorderWidthSlider.value = parseInt( tableBorderWidth );
                }
                if ( wptbTableBorderWidthNumber ) {
                    wptbTableBorderWidthNumber.value = parseInt( tableBorderWidth );
                }
            }
            
            
            let tableTd = table[0].querySelector( 'td' );
            let applyInnerBorder = tableTd.style.borderWidth;
            if ( applyInnerBorder ) {
                let innerBorderCheckInput = document.getElementById( 'wptb-inner-border-check' );
                let wptbApplyInnerBorder = document.getElementById( 'wptb-apply-inner-border' );
                if ( applyInnerBorder && parseInt( applyInnerBorder ) > 0 ) {
                    if ( innerBorderCheckInput ) {
                        innerBorderCheckInput.checked = true;
                        
                        if ( wptbApplyInnerBorder ) {
                            wptbApplyInnerBorder.classList.add( 'visible' );
                            let wptbTableInnerBorderSlider = document.getElementById( 'wptb-table-inner-border-slider' );
                            let wptbTableInnerBorderNumber = document.getElementById( 'wptb-table-inner-border-number' );
                            wptbTableInnerBorderSlider.value = parseInt( applyInnerBorder );
                            wptbTableInnerBorderNumber.value = parseInt( applyInnerBorder );
                        }
                    }
                } else {
                    innerBorderCheckInput.checked = false;
                }
            }
            
            if ( ( tableBorderWidth && parseInt( tableBorderWidth ) > 0 ) || ( applyInnerBorder && parseInt( applyInnerBorder ) > 0 ) ) {
                document.getElementById( 'wptb-table-border-color-set-area' ).style.display = '';
            }
        }
    }
    
    tableBorderColorWidthSavedSet();

    jQuery('#wptb-table-border-color').wpColorPicker({
        change: function (event, ui) {
            var tableCells = table.getElementsByTagName('td');
            table.style.border = document.querySelector('#wptb-table-border-number').value + 'px solid ' + ui.color.toString();

            for (var i = 0; i < tableCells.length; i++) {
                let tableInnerborderNumber = document.querySelector('#wptb-table-inner-border-number').value;
                if ( document.getElementById('wptb-inner-border-check').checked ) {
                    tableCells[i].style.border = ( tableInnerborderNumber != 0 ? tableInnerborderNumber : 1 ) + 'px solid ' + ui.color.toString();
                }
                
            }
        },
        clear: function() {
            var tableCells = table.getElementsByTagName('td');
            table.style.borderColor = '';

            for (var i = 0; i < tableCells.length; i++) {
                tableCells[i].style.borderColor = '';
            }
        }
    });

    function addInnerBorderSize(value) {
        var tableCells = table.getElementsByTagName('td');
        for (var i = 0; i < tableCells.length; i++) {
            tableCells[i].style.borderWidth = document.querySelector('#wptb-table-inner-border-number').value + 'px';
            tableCells[i].style.borderStyle = 'solid';
        }
    }

    function addCellPadding(value) {
        var tableCells = table.getElementsByTagName('td');
        for (var i = 0; i < tableCells.length; i++) {
            tableCells[i].style.padding = value + 'px';
        }
    }

    function addInnerBorder(checked) {
        var styles, color = document.querySelector('#wptb-table-border-color').value != undefined ?
            document.querySelector('#wptb-table-border-color').value : 'rgb(0,0,0)';
            if ( document.querySelector( '#wptb-table-inner-border-slider' ).value == 0 || document.querySelector( '#wptb-table-inner-border-number' ).value == 0 ) {
                document.querySelector( '#wptb-table-inner-border-slider' ).value = 1;
                document.querySelector( '#wptb-table-inner-border-number' ).value = 1;
            }
            let width = document.querySelector( '#wptb-table-inner-border-slider' ).value + 'px';

        if (checked == 'checked') {
            document.getElementById('wptb-apply-inner-border').style.marginBottom = '0px';
            var tableCells = document.getElementsByClassName('wptb-preview-table')[0].getElementsByTagName('td');
            for (var i = 0; i < tableCells.length; i++) {
                tableCells[i].style.border = width + ' solid ' + color;
            }
            document.getElementById('wptb-apply-inner-border').classList.add('visible');
        } else {
            document.getElementById('wptb-apply-inner-border').classList.remove('visible');
            var tableCells = document.getElementsByClassName('wptb-preview-table')[0].getElementsByTagName('td');
            for (var i = 0; i < tableCells.length; i++) {
                tableCells[i].style.border = '0px solid ' + color;
            }
        }
    }

    function addBorderSize(value) {
        table.style.borderWidth = value + 'px';
        table.style.borderStyle = 'solid';
    }
    
    function cellPaddingSavedSet() {
        let table = document.getElementsByClassName('wptb-preview-table');
        
        if ( table.length > 0 ) {
            let td = table[0].querySelector( 'td' );
            
            if ( td ) {
                let padding = td.style.padding;
                
                if ( padding ) {
                    let wptbTableCellSlider = document.getElementById('wptb-table-cell-slider'),
                        wptbTableCellNumber = document.getElementById('wptb-table-cell-number');
                
                    if ( wptbTableCellSlider ) {
                        wptbTableCellSlider.value = parseInt( padding );
                    }
                    if ( wptbTableCellNumber ) {
                        wptbTableCellNumber.value = parseInt( padding );
                    }
                }
            }
        }
    }
    
    cellPaddingSavedSet();
    
    
    
    document.getElementById('wptb-table-cell-slider').oninput = function () {
        document.getElementById('wptb-table-cell-number').value = this.value;
        addCellPadding(this.value);
    };

    document.getElementById('wptb-table-cell-number').onchange = function () {
        document.getElementById('wptb-table-cell-slider').value = this.value;
        addCellPadding(this.value);
    };

    document.getElementById('wptb-table-border-slider').oninput = function () {
        document.getElementById('wptb-table-border-number').value = this.value;
        addBorderSize(this.value);
        
        let wptbInnerBorderCheck = document.getElementById('wptb-inner-border-check').checked,
            tableBorderColorSetArea = document.getElementById( 'wptb-table-border-color-set-area' );
        console.log(wptbInnerBorderCheck);
        console.log(this.value);
        if ( this.value == 0 && wptbInnerBorderCheck == false ) {
            tableBorderColorSetArea.style.display = 'none';
        } else {
            tableBorderColorSetArea.style.display = '';
        }
    };

    document.getElementById('wptb-table-border-number').onchange = function () {
        document.getElementById('wptb-table-border-slider').value = this.value;
        addBorderSize(this.value);
    };

    document.getElementById('wptb-table-inner-border-slider').oninput = function () {
        document.getElementById('wptb-table-inner-border-number').value = this.value;
        addInnerBorderSize(this.value);
    };

    document.getElementById('wptb-table-inner-border-number').onchange = function () {
        document.getElementById('wptb-table-inner-border-slider').value = this.value;
        addInnerBorderSize(this.value);
    };

    document.getElementById('wptb-inner-border-check').onchange = function () {
        var _val = this.checked ? 'checked' : 'unchecked';
        addInnerBorder(_val);
        let borderWidth = document.getElementById('wptb-table-border-slider').value,
            tableBorderColorSetArea = document.getElementById( 'wptb-table-border-color-set-area' );
        if( _val == 'unchecked' && borderWidth == 0 ) {
            tableBorderColorSetArea.style.display = 'none';
        } else {
            tableBorderColorSetArea.style.display = '';
        }
    };

    for (var i = 0; i < wptbElementButtons.length; i++) {
        wptbElementButtons[i].ondragstart = function (e) {
            e.dataTransfer.setData('wptbElement', this.dataset.wptbElement);
            e.dataTransfer.setDataElem = {
                type: 'wptbElement',
                data: this.dataset.wptbElement
            };
            e.setDataElem = {
                type: 'wptbElement',
                data: this.dataset.wptbElement
            };
        }
    }

    document.getElementById('wptb-activate-cell-management-mode').onclick = table.toggleTableEditMode;
    document.getElementById( 'wptb-table-edit-mode-close' ).onclick = table.toggleTableEditMode;
    document.getElementById( 'wptb-left-scroll-panel-curtain-close' ).onclick = table.toggleTableEditMode;
    document.getElementById('wptb-add-end-row').onclick = table.addRowToTheEnd;
    document.getElementById('wptb-add-start-row').onclick = table.addRowToTheStart;
    document.getElementById('wptb-add-row-before').onclick = table.addRowBefore;
    document.getElementById('wptb-add-row-after').onclick = table.addRowAfter;
    document.getElementById('wptb-add-end-column').onclick = table.addColumnEnd;
    document.getElementById('wptb-add-start-column').onclick = table.addColumnStart;
    document.getElementById('wptb-add-column-before').onclick = table.addColumnBefore;
    document.getElementById('wptb-add-column-after').onclick = table.addColumnAfter;
    document.getElementById('wptb-delete-column').onclick = table.deleteColumn;
    document.getElementById('wptb-delete-row').onclick = table.deleteRow;
    document.getElementById('wptb-merge-cells').onclick = table.mergeCells;
    document.getElementById('wptb-split-cell').onclick = table.splitCell;
    document.getElementById('add-elements').onclick = function () {
        document.getElementById('element-options').getElementsByTagName('a')[0].classList.remove('active');
        document.getElementById('add-elements').getElementsByTagName('a')[0].classList.add('active');
        document.getElementsByClassName('wptb-elements-container')[0].style.display = 'table';
        document.getElementsByClassName('wptb-settings-section')[0].style.display = 'block';
        document.getElementById("element-options-group").style.display = 'none';
    };

};
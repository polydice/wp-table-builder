var WPTB_Cell = function (callback, DOMElement) {

    function newElementProxy(el) {
        if (el == 'list') {
            return new WPTB_List();
        } else if (el == 'image') {
            return new WPTB_Image();
        } else if (el == 'text') {
            return new WPTB_Text();
        } else if (el == 'button') {
            return new WPTB_Button();
        }
    }

    function highlightRow(td) {
        var parentRow = td.parentNode,
            columnCount = parseInt(document.getElementById('wptb-columns-number').value),
            tds = document.getElementsByClassName('wptb-preview-table')[0].getElementsByTagName('td');
        for (var i = 0; i < tds.length; i++) {
            tds[i].classList.remove('highlighted-row-first', 'highlighted-row-last', 'highlighted-row-inner', 'highlighted-column-first', 'highlighted-column-last', 'highlighted-column-inner');
        }
        for (var i = 0; i < columnCount; i++) {

            var classToAdd = i == 0 ? 'highlighted-row-first' : i == columnCount - 1 ? 'highlighted-row-last' : 'highlighted-row-inner';
            var ttd = parentRow.getElementsByTagName('td')[i];
            if (ttd !== td) {
                ttd.classList.add(classToAdd);
            }
        }
    }

    function highlightColumn(td) {

        var index,
            parentRow = td.parentNode;
        columnCount = parseInt(document.getElementById('wptb-columns-number').value), rowCount = parseInt(document.getElementById('wptb-rows-number').value), table = document.getElementsByClassName('wptb-preview-table')[0];
        for (var i = 0; i < columnCount; i++) {
            if (parentRow.getElementsByTagName('td')[i] === td) {
                index = i;
                break;
            }
        }

        for (var i = 0; i < rowCount; i++) {
            var classToAdd = i == 0 ? 'highlighted-column-first' : i == rowCount - 1 ? 'highlighted-column-last' : 'highlighted-column-inner';
            var tr = table.getElementsByTagName('tr')[i];
            if (tr.getElementsByTagName('td')[index] !== td) {
                tr.getElementsByTagName('td')[index].classList.add(classToAdd);
            }
        }
    }
    
    if( ! DOMElement ) {
        DOMElement = document.createElement("td");

        DOMElement.style.padding = jQuery('#wptb-table-padding-number').val() + 'px';

        var innerBorderWidth = jQuery('#wptb-table-inner-border-number').val();

        if (innerBorderWidth != '' && parseInt(innerBorderWidth) != 0) {
            DOMElement.style.border = innerBorderWidth + 'px solid ' + jQuery('#wptb-table-border-color').val();
        } else {
            DOMElement.style.border = '1px dashed #969fa6';
        }

        DOMElement.classList.add('wptb-droppable', 'wptb-cell');
    }

    DOMElement.draggable = false;
    if ( callback ) {
        DOMElement.onclick = callback;
    }

    DOMElement.ondragenter = function (e) {
        var div;
        if (!e.dataTransfer.getData('wptbElement') && !e.dataTransfer.getData('node')) {
            return;
        }
        this.classList.add('wptb-drop-here-empty');
    };
    
    DOMElement.ondragover = function (e) {
        e.preventDefault();
    };
    
    DOMElement.ondragleave = function () {
        this.classList.remove('wptb-drop-here-empty');
    };

    DOMElement.ondrop = function (e) {
        var element, classId, space, t_space, spaceParent;
        e.preventDefault();
        space = new WPTB_Space();

        if (!e.dataTransfer.getData('wptbElement') && !e.dataTransfer.getData('node')) {
            return;
        }

        if (e.dataTransfer.getData('wptbElement')) {
            element = newElementProxy(e.dataTransfer.getData('wptbElement'));
            if (this.innerHTML == '') {
                this.appendChild(new WPTB_Space());
            }
            this.appendChild(element.getDOMElement());
            this.appendChild(space);
        } else {
            classId = e.dataTransfer.getData('node');
            element = document.getElementsByClassName(classId)[0];
            if (this.innerHTML == '') {
                t_space = element.nextSibling;
                spaceParent = element.parentNode;
                if (t_space != undefined) {
                    spaceParent.removeChild(t_space);
                }
                this.appendChild(new WPTB_Space());
            }
            this.appendChild(element);
            this.appendChild(space);
        }
        this.classList.remove('wptb-drop-here-empty');
        return true;
    };
    
    let wptbPhElement = DOMElement.getElementsByClassName( 'wptb-ph-element' );
                                            
    if ( wptbPhElement.length > 0 ) {
        for( let i = 0; i < wptbPhElement.length; i++ ) {

            let wptbSpaceBetween = DOMElement.getElementsByClassName( 'wptb-space-between' );

            if ( wptbSpaceBetween.length > 0 ) {
                for( let j = 0; j < wptbSpaceBetween.length; j++ ) {
                    WPTB_Space( wptbSpaceBetween[j] );
                }
            }

            wptbPhElement[i].getDOMElement = function() {
                return wptbPhElement[i];
            }

            let wptbElementTypeClass = wptbPhElement[i].className.match( /wptb-element-((.+-)\d+)/i );

            if( wptbElementTypeClass && Array.isArray( wptbElementTypeClass ) ) {
                let wptbTypeElementArr = wptbElementTypeClass[1].split( '-' );
                wptbPhElement[i].kind = wptbTypeElementArr[0];
                applyGenericItemSettings( wptbPhElement[i] );
                if ( wptbPhElement[i].kind == 'list' ) {
                    console.log(wptbPhElement[i]);
                    let wptbArticle = wptbPhElement[i].getElementsByTagName( 'article' );
                    if( wptbArticle.length > 0 ) {
                        for ( let i = 0; i < wptbArticle.length; i++ ) {
                            console.log(wptbArticle);
                            WPTB_ListItem( undefined, wptbArticle[i] );
                        }
                    }
                }
            }
        }
    }

    this.getDOMElement = function () {
        return DOMElement;
    };

    this.setCoords = function (y, x) {
        var el = this.getDOMElement();
        el.dataset.yIndex = y;
        el.dataset.xIndex = x;
    };

    this.getCoords = function () {
        var coords,
            el = this.getDOMElement();
        coords.x = el.dataset.xIndex;
        coords.y = el.dataset.yIndex;
        return coords;
    };

    this.appendElement = function (node) {
        getDOMElement().appendChild(node);
    };

    return this;
};
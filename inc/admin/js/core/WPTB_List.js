var WPTB_List = function ( innerElements, DOMElementProt ) {

    var el_L = document.createElement('ul'), item,
        DOMElement = document.createElement('div');

    this.kind = 'list';

    if (innerElements === '') {
        //Case for edit mode list
    } else if (!innerElements) {
        for (var i = 0; i < 3; i++) {
            item = new WPTB_ListItem( 'List Item ' + (i + 1) );
            el_L.appendChild(item.getDOMElement());
        }
    } else {
        for (var i = 0; i < innerElements.length; i++) {
            item = new WPTB_ListItem( innerElements[i], DOMElementProt, true );
            el_L.appendChild(item.getDOMElement());
        }
    }
    DOMElement.appendChild(el_L);
    //window.addElementOptions('list', elList);

    this.getDOMElement = function () {
        return DOMElement;
    }
    applyGenericItemSettings(this);

    return this;

};
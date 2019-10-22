var WPTB_ItemObject = function ( data ) {
    let DOMElement, kindIndexProt, copy;
    if( ! data.elemProt ) {
        DOMElement = document.createElement('div'),
        kindIndexProt = undefined,
        copy = false;
        DOMElement.classList.add( 'wptb-' + data.kind + '-container', 'wptb-ph-element', 'wptb-item-javascript-indic' );
    
        let wpTemplateId = 'wptb-' + data.kind + '-content';
        let template = wp.template( wpTemplateId );
        data.node = DOMElement;
        let itemHtml = template( data );

        itemHtml = itemHtml.replace(/\r|\n|\t/g, '').trim();
        DOMElement.innerHTML = itemHtml;
    } else {
        DOMElement = data.elemProt.cloneNode( true );
        DOMElement.classList.remove( 'wptb-directlyhovered' );
        let wptbElementMutch = data.elemProt.className.match( /wptb-element-((.+-)\d+)/i );
        if ( wptbElementMutch && Array.isArray( wptbElementMutch ) ) {
            kindIndexProt = wptbElementMutch[1];
        };
        copy = true;
    }
     
    window.addEventListener( 'item:onmouseenter', function( event ) {
        //console.log( event );
    }, false);
    
    
    this.kind = data.kind;
    this.getDOMElement = function () {
        return DOMElement;
    };
    
    applyGenericItemSettings( this, kindIndexProt, copy );
    return this;
}


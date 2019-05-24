var WPTB_innerElementSet = function  ( element ) {
    
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
    
    element.ondragenter = function (e) {
        var div;
        if ( !e.dataTransfer.getData('wptbElement') && !e.dataTransfer.getData('node') ) {
            return;
        }
        
        WPTB_DropHandle(this, e);
        
        element.classList.add( 'ondragenter' );
    }
    element.ondragover = function (e) {
        e.preventDefault();
        WPTB_DropHandle(this, e);
    }
    element.ondragleave = function () {
        
    }
    element.ondrop = function(e) {
        this.classList.remove( 'ondragenter' );
        let element, classId;
        e.preventDefault();
        e.stopPropagation();

        if (!e.dataTransfer.getData('wptbElement') && !e.dataTransfer.getData('node')) {
            return;
        }
        let wptbDropHandle,
            wptbDropBorderMarker;
        if ( document.getElementsByClassName( 'wptb-drop-handle' ).length > 0 ) {
            wptbDropHandle = document.getElementsByClassName( 'wptb-drop-handle' )[0];
        }
        if( document.getElementsByClassName( 'wptb-drop-border-marker' ).length > 0 ) {
            wptbDropBorderMarker = document.getElementsByClassName( 'wptb-drop-border-marker' )[0];
        }

        if ( e.dataTransfer.getData( 'wptbElement' ) ) {
            element = newElementProxy( e.dataTransfer.getData( 'wptbElement' ) );
            element = element.getDOMElement();
        } else {
            classId = e.dataTransfer.getData( 'node' );
            element = document.getElementsByClassName( classId )[0];
            element.classList.remove( 'moving-mode' );
        }
        
        if( wptbDropHandle.style.display == 'block' ) {
            if( wptbDropHandle.dataset.text == 'Drop Here' ) {
                let td = wptbDropHandle.getDOMParentElement();
                td.appendChild( element );
            } else {
                let innerElement = wptbDropHandle.getDOMParentElement(),
                    td = innerElement.parentNode;

                if( wptbDropHandle.dataset.text == 'Abowe Element' ) {
                    td.insertBefore( element, innerElement );
                } else if( wptbDropHandle.dataset.text == 'Below Element' ) {
                    let innerElementNext = innerElement.nextSibling;
                    td.insertBefore( element, innerElementNext );
                }
            }
        } else {
            this.appendChild( element );
        }
        
        wptbDropHandle.style.display = 'none';
        wptbDropBorderMarker.style.display = 'none';

        WPTB_innerElementSet( element );

        return true;
    }
    element.onmouseover = function(e) {
        element.classList.remove( 'ondragenter' );
    }
}
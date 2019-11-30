var applyGenericItemSettings = function ( element, kindIndexProt, copy = false ) {
    var node = element.getDOMElement(),
        index,
        copy;
    if( node.classList.contains( 'wptb-ph-element' ) ) {
        if ( kindIndexProt == undefined || copy == true ) {
            index = document.counter.nextIndex( element.kind );
            let wptbElements = document.getElementsByClassName( 'wptb-ph-element' );
            let elementIndexesArr = [];
            for( let i = 0; i < wptbElements.length; i++ ) {
                var regex = new RegExp( 'wptb-element-' + element.kind + '-(\\d+)', "i" );
                let infArr = wptbElements[i].className.match( regex );
                if( infArr ) {
                    elementIndexesArr.push( infArr[1] );
                }
            }
            if( elementIndexesArr.length > 0 ) {
                let elementIndexMax = Math.max( ...elementIndexesArr );
                index = elementIndexMax + 1;
            } else { 
                index = 1;
            }

            if( copy ) {
                // change all data-elements which save parameters for different controls
                let wptbNodeattributes = [...node.attributes];
                for( let i = 0; i < wptbNodeattributes.length; i++ ) {
                    if( wptbNodeattributes[i] && typeof wptbNodeattributes[i] === 'object' && wptbNodeattributes[i].nodeName ) {
                        let regularText = new RegExp( 'data-wptb-el-' + element.kind + '-(\\d+)-(.+)', "i" );
                        let attr = wptbNodeattributes[i].nodeName.match( regularText );
                        if( attr && Array.isArray( attr ) ) {
                            let newDataAttributeName = wptbNodeattributes[i].nodeName.replace( element.kind + '-' + attr[1], element.kind + '-' + index );
                            let newDataAttributeValue = wptbNodeattributes[i].nodeValue;
                            node.removeAttribute( wptbNodeattributes[i].nodeName );
                            node.setAttribute( newDataAttributeName, newDataAttributeValue );
                        }
                    }
                }
            }
        } else if ( kindIndexProt && ! copy ) {
            let kindIndexProtArr = kindIndexProt.split('-');
            index = kindIndexProtArr[kindIndexProtArr.length - 1];
            // start item javascript if item is new
            WPTB_Helper.elementStartScript( element.getDOMElement() );
        }

        let node_wptb_element_kind_num = node.className.match(/wptb-element-(.+)-(\d+)/i);
        if ( node_wptb_element_kind_num ) {
            node.classList.remove( node_wptb_element_kind_num[0] );
        }
        if ( ! node.classList.contains( 'wptb-ph-element' ) ) {
            node.classList.add( 'wptb-ph-element' );
            if( ! node.classList.contains( 'wptb-element-' + element.kind + '-' + index ) ) {
                node.classList.add( 'wptb-element-' + element.kind + '-' + index );
            }
        } else {
            if( ! node.classList.contains( 'wptb-element-' + element.kind + '-' + index ) ) {
                node.classList.add( 'wptb-element-' + element.kind + '-' + index );
            }
        }
        new WPTB_ElementOptions( element, index, kindIndexProt );

        document.counter.increment(element.kind);
    }
    
    node.onmouseenter = function ( event ) {
        if( event.target.classList.contains( 'wptb-moving-mode' ) ) {
            return;
        }
        
        let wptbActionsField = new WPTB_ActionsField();
        
        wptbActionsField.addActionField( 1, node );
        
        wptbActionsField.setParameters( node );
        
        node.classList.remove( 'wptb-ondragenter' );
    };
    
    node.onmouseleave = function ( event ) {
        let wptbActionsField = new WPTB_ActionsField();
        
        wptbActionsField.leaveFromField( event, node );
    };
};
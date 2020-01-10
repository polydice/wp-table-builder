var WPTB_Settings = function () {
    var elems = document.getElementsByClassName('wptb-element');

    for ( var i = 0; i < elems.length; i++ ) {
        elems[i].ondragstart = function ( event ) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData( 'wptbElement', event.target.dataset.wptbElement );
            event.dataTransfer.setData( 'wptbElIndic-' + event.target.dataset.wptbElement, 'wptbElIndic-' + event.target.dataset.wptbElement );
        }
        elems[i].ondragend = function () {
            WPTB_Helper.elementDragEndClear();
        }
    };
    let table = document.getElementsByClassName( 'wptb-preview-table' );
    let wptbTableStateSaveManager = new WPTB_TableStateSaveManager();
    let wptbUndo = document.getElementsByClassName( 'wptb-undo' );
    if( wptbUndo.length > 0 ) {
        wptbUndo = wptbUndo[0];
        
        wptbUndo.onclick = function( event ) {
            if( ! this.classList.contains( 'wptb-undoredo-disabled' ) ) {
                wptbTableStateSaveManager.tableStateGet( this.dataset.wptbUndoredo );
                let wptbUndoRedoContainer = document.getElementsByClassName( 'wptb-undo-redo-container' );
                if( wptbUndoRedoContainer.length > 0 && table.length > 0 ) {
                    wptbUndoRedoContainer = wptbUndoRedoContainer[0];
                    wptbUndoRedoContainer.onmouseleave = function( event ) {
                        event.target.onmouseleave = '';
                        WPTB_Table();
                    }
                }
            }
            
        }
    }
    
    let wptbRedo = document.getElementsByClassName( 'wptb-redo' );
    if( wptbRedo.length > 0 ) {
        wptbRedo = wptbRedo[0];
        
        wptbRedo.onclick = function( event ) {
            if( ! this.classList.contains( 'wptb-undoredo-disabled' ) ) {
                wptbTableStateSaveManager.tableStateGet( this.dataset.wptbUndoredo );
                let wptbUndoRedoContainer = document.getElementsByClassName( 'wptb-undo-redo-container' );
                if( wptbUndoRedoContainer.length > 0 && table.length > 0 ) {
                    wptbUndoRedoContainer = wptbUndoRedoContainer[0];
                    wptbUndoRedoContainer.onmouseleave = function( event ) {
                        event.target.onmouseleave = '';
                        WPTB_Table();
                    }
                }
            }
            
        }
    }
    
    let shortcodePopupWindow = document.getElementsByClassName( 'wptb-popup-window-modal' )[0];
    document.getElementsByClassName( 'wptb-embed-btn' )[0].onclick = function () {
        if( ! this.classList.contains( 'wptb-button-disable' ) ) {
            shortcodePopupWindow.classList.add( 'wptb-popup-show' );
        }
    }
    
    window.onbeforeunload = function(e) {
        let wptbSaveDisabled = document.getElementsByClassName( 'wptb-save-disabled' );
        if( wptbSaveDisabled.length == 0 ) {
            return true;
        } else {
            return null;
        }
    };
    
    
    document.getElementsByClassName( 'wptb-popup-dark-area' )[0].onclick = function () {
        shortcodePopupWindow.classList.remove( 'wptb-popup-show' );
    }
    
    document.getElementsByClassName( 'wptb-popup-window-close-icon' )[0].onclick = function () {
        shortcodePopupWindow.classList.remove( 'wptb-popup-show' );
    }
    
    document.getElementsByClassName( 'wptb-preview-btn' )[0].onclick = function ( e ) {
        if( this.classList.contains( 'wptb-button-disable' ) ) {
            e.preventDefault();
        }
    }

    document.getElementsByClassName( 'wptb-save-btn' )[0].onclick = function ( event ) {
        if( ! this.classList.contains( 'wptb-save-disabled' ) ) {
            WPTB_Helper.saveTable( event );
        }
    }
};

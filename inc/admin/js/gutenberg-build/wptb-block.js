!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(18),a=n(19),l=n(20),i=n(22);e.exports=function(e,t){return r(e)||a(e,t)||l(e,t)||i()}},function(e,t){e.exports=window.ReactDOM},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(23);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(12),a=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.apiFetch},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}}},function(e,t,n){var r=n(21);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";(function(e,t){var r,a,l=n(4),i=n.n(l),o=n(3),c=n.n(o),s=n(12);r=self||e,a=function(){return new function(){var e,t=this;this.modes={builder:"builder",frontEnd:"frontEnd",block:"block"},this.baseDocument=document,this.currentMode=this.modes.builder,this.generalStyles="";var n=(e={},c()(e,this.modes.builder,".wptb-table-setup .wptb-preview-table"),c()(e,this.modes.block,".wptb-block-table-setup .wptb-preview-table"),c()(e,this.modes.frontEnd,".wptb-table-container .wptb-preview-table"),e),r=function(e,t){var n=t.replaceAll(/(\r?\n)|(\/\*.+?\*\/)|(\s*!important)/g,"").replaceAll(";"," !important;").split("}"),r=[];return n.map((function(t){var n=new RegExp(/(.+?)\{/g).exec(t);n&&r.push(t.replace(n[1],"".concat(e," ").concat(n[1])))})),"".concat(r.join("}"),"}")},a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=document.createElement("style");if(a.type="text/css",a.id="wptb-general-styles",n)n.insertAdjacentElement("beforebegin",a);else{var l=t.currentMode===t.modes.block?t.baseDocument:t.baseDocument.querySelector("head");l.appendChild(a)}var i=r(e.parentPrefix,e.styles);a.appendChild(document.createTextNode(i))},l=function(e){var n=e.dataset.wptbExtraStyles;if(n){var l=atob(n),o=e.getAttribute("class").match(/wptb-element-main-table_setting-(?:startedid-)?(\d+)/),c=i()(o,2)[1],s="wptb-extra-styles-"+c,u=t.baseDocument.querySelector("head"),d=null==u?void 0:u.querySelector("#".concat(s));d||((d=document.createElement("style")).type="text/css",d.id=s,e.dataset.disableThemeStyles&&t.currentMode===t.modes.frontEnd||t.currentMode===t.modes.block?(e.insertAdjacentElement("beforebegin",d),t.currentMode===t.modes.frontEnd&&t.generalStyles&&a(t.generalStyles,e)):u.appendChild(d));var b=".wptb-element-main-table_setting-".concat(c),p=r(b,l);d.innerHTML="",d.appendChild(document.createTextNode(p))}};this.applyStyles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.modes.frontEnd,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;t.baseDocument=i,t.currentMode=e,t.generalStyles=r;var o=Array.from(t.baseDocument.querySelectorAll(n[e]));o&&o.map(l),e!==t.modes.frontEnd&&e!==t.modes.block||!r||a(r)}}},"object"===("undefined"==typeof exports?"undefined":n.n(s)()(exports))?t.exports=a():r.WPTB_ExtraStyles=a()}).call(this,n(25),n(26)(e))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),l=n(14),i=n(1),o=n(0),c=n.n(o),s=n(4),u=n.n(s),d=n(8),b=n.n(d),p=n(9),f=n.n(p),h=n(2),m=n.n(h),v=n(10),w=n.n(v),y=n(11),g=n.n(y),S=n(6),E=n.n(S),O=n(15),T=n.n(O),k=n(16),j=n.n(k),x=c.a.createContext({attributes:{},setAttributes:function(){},savedTable:null,setSavedTable:function(){},blockData:{}});function _(e){return function(t){return c.a.createElement(x.Consumer,null,(function(n){return c.a.createElement(e,j()({},n,t))}))}}var P=n(5),N=n.n(P);function I(e){var t=e.searchTerm,n=e.updateSearch;return c.a.createElement("div",{className:"wptb-table-search"},c.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)},type:"text",placeholder:Object(i.__)("search for tables","wp-table-builder")}),""!==t?c.a.createElement("div",{className:"wptb-search-clear",onClick:function(){return n("")}},"X"):"")}function R(e){var t=e.show,n=e.children;return c.a.createElement("div",{className:"wptb-block-overlay wptb-basic-appear-anim",style:{display:t?"flex":"none"}},n)}function C(e){var t=e.tables,n=e.rowSelected,r=e.selectedId,a=e.searchTerm,l=e.activeId,o=function(e){var t="".concat(e),n=new RegExp("(".concat(a,")"),"ig");return t.replace(n,'<span class="wptb-block-search-indicator">$&</span>')};return c.a.createElement("div",{className:"wptb-table-list"},t.map((function(e){return c.a.createElement("div",{onClick:n(e.id),className:"wptb-table-list-row wptb-basic-appear-anim ".concat(r===e.id?"selected":""),key:e.id,"data-is-active":(t=e.id,Number.parseInt(l,10)===Number.parseInt(t,10))},c.a.createElement("div",{className:"wptb-table-list-title",dangerouslySetInnerHTML:{__html:o(e.title)}}),c.a.createElement("div",{className:"wptb-table-list-id",dangerouslySetInnerHTML:{__html:o(e.id)}}));var t})),c.a.createElement(R,{show:t.length<=0},Object(i.__)("no tables found","wp-table-builder")))}n(24);var B=_((function(e){var t=e.content,n=e.scale,r=e.blockData,a=r.tableCssUrl,l=r.generalStyles,i=c.a.createRef();return Object(o.useEffect)((function(){if(null!==t&&void 0!==a){var e=document.createElement("div");e.setAttribute("id","wptb-block-preview-base"),e.attachShadow({mode:"open"});var r=e.shadowRoot;Object.keys(a).map((function(e){Object.prototype.hasOwnProperty.call(a,e)&&function(e,t,n){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href",t),r.setAttribute("media","all"),r.setAttribute("id",e),n.appendChild(r)}(e,a[e],r)}));var o=document.createRange();o.setStart(document,0);var c=o.createContextualFragment('<div class="wptb-block-table-setup">'.concat(t,"</div>"));r.appendChild(c.children[0]),window.WPTB_ExtraStyles.applyStyles(window.WPTB_ExtraStyles.modes.block,l,r);var s=i.current,u=r.querySelector("table"),d=u.dataset.wptbTableContainerMaxWidth,b=u.dataset.wptbTableContainerMaxWidth,p="700px";if(b?(p="auto",u.style.minWidth="".concat(d?Math.max(d,b):b,"px")):d&&(p="".concat(d,"px")),u.style.width=p,s.innerHTML="",s.appendChild(e),n){var f=s.getBoundingClientRect(),h=f.width,m=f.height,v=u.getBoundingClientRect(),w=h/(v.width+40),y=m/(v.height+40),g=Math.min(w,y);if(u.style.transform="scale(".concat(g,")"),window.navigator.vendor.includes("Google")&&"separate"===u.style.borderCollapse){var S=parseInt(u.dataset.borderSpacingColumns,10),E=parseInt(u.dataset.wptbCellsWidthAutoCount,10);u.style.marginLeft="-".concat((E+1)*S*-1,"px")}}}})),c.a.createElement("div",{ref:i,className:"wptb-table-preview wptb-unselectable"},c.a.createElement("span",{className:"dashicons dashicons-grid-view no-table-selected-preview"}))}));function D(e){var t=e.type,n=e.onClick,r=e.children,a=e.disabled;return c.a.createElement("div",{onClick:n,className:"wptb-block-button wptb-unselectable ".concat(t||"primary"," ").concat(a?"wptb-block-button-disabled":"")},r)}function M(e){var t=e.searchTerm,n=e.updateSearch,r=e.selectedId,a=e.rowSelected,l=e.filteredTables,s=e.selectedTable,u=e.saveTable,d=e.footerRightPortal,b=e.savedId,p=e.setSelectScreen;return c.a.createElement("div",{className:"wptb-table-select"},c.a.createElement("div",{className:"wptb-table-list-wrapper"},c.a.createElement(I,{searchTerm:t,updateSearch:n}),c.a.createElement(C,{searchTerm:t,selectedId:r,rowSelected:a,tables:l(),activeId:b})),c.a.createElement(B,{scale:!0,content:s?s.content:null}),null!==d?N.a.createPortal(c.a.createElement(o.Fragment,null,b>=0?c.a.createElement(D,{onClick:function(){return p(!1)},type:"negative"},Object(i.__)("cancel","wp-table-builder")):"",c.a.createElement(D,{disabled:!s||b===r,onClick:u},Object(i.__)("select","wp-table-builder"))),d.current):"")}function A(e){var t=e.selectedTable,n=e.footerRightPortal,r=e.changeToSelect;return c.a.createElement("div",{className:"wptb-table-selected-view wptb-basic-appear-anim"},c.a.createElement(B,{scale:!0,content:t?t.content:null}),null!==n?N.a.createPortal(c.a.createElement(D,{onClick:r},Object(i.__)("change","wp-table-builder")),n.current):"")}var F=n(13);function U(e){var t=e.show;return c.a.createElement(R,{show:t},c.a.createElement("div",{className:"wptb-busy-overlay dashicons dashicons-update-alt"}))}function W(e){var t=e.builderUrl,n=e.show,r=e.builderVisibility,a=e.updateSelection,l=Object(o.useState)(t),i=u()(l,2),s=i[0],d=i[1],b=Object(o.useState)(!1),p=u()(b,2),f=p[0],h=p[1],m=Object(o.useRef)(null);return Object(o.useEffect)((function(){(function(e){if(e){var t=new URL(e);t.searchParams.append("gutenberg",!0),d(t.toString())}})(t),n&&(Object(F.select)("core/edit-post").isFeatureActive("fullscreenMode")||Object(F.dispatch)("core/edit-post").toggleFeature("fullscreenMode"),h(!1),m.current.addEventListener("load",(function(){h(!0),(m.current.contentDocument||m.current.contentWindow.document).addEventListener("gutenbergClose",(function(e){var t=e.detail;!0!==t&&a&&"function"==typeof a&&a(t),r(!1)}))})))})),c.a.createElement("div",{className:"wptb-block-builder-wrapper ".concat(n?"":"hide")},n?c.a.createElement(o.Fragment,null,c.a.createElement("div",{style:{display:f?"none":"flex"},className:"wptb-block-builder-load-indicator"},c.a.createElement(U,{show:!0})),c.a.createElement("iframe",{ref:m,className:"wptb-block-builder",src:s})):"")}var L=n(17),V=n(7);function q(e){var t=e.label,n=e.value;return c.a.createElement(V.PanelRow,null,c.a.createElement("div",{className:"wptb-block-info-label"},t),c.a.createElement("div",{className:"wptb-block-info-value"},n))}function H(e){var t=e.header,n=e.table;return c.a.createElement(L.InspectorControls,null,c.a.createElement(V.Panel,null,c.a.createElement(V.PanelBody,{title:t,initialOpen:!0},n?c.a.createElement(o.Fragment,null,c.a.createElement(q,{label:Object(i.__)("ID","wp-table-builder"),value:n.id}),c.a.createElement(q,{label:Object(i.__)("title","wp-table-builder"),value:n.title}),c.a.createElement(q,{label:Object(i.__)("shortcode","wp-table-builder"),value:"[wptb id=".concat(n.id,"]")}),c.a.createElement(q,{label:Object(i._x)("tags","modified date","wp-table-builder"),value:n.wptb_table_tags.length>0?n.wptb_table_tags.map((function(e){return e.name})).join(","):Object(i.__)("No Tags","wp-table-builder")}),c.a.createElement(q,{label:Object(i._x)("Modified at","modified date","wp-table-builder"),value:new Intl.DateTimeFormat("default").format(new Date(n.modified))})):c.a.createElement(V.PanelRow,null,c.a.createElement("i",null,Object(i.__)("no table selected","wp-table-builder"))))))}function z(e){var t=e.targetEl,n=e.children,r=e.id;return t.setAttribute("id",r),Object(P.createPortal)(n,t)}var $=_(function(e){w()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=E()(t);if(n){var a=E()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return g()(this,e)});function a(e){var t;return b()(this,a),(t=r.call(this,e)).state={selectedId:Number.parseInt(t.props.attributes.id,10),savedId:Number.parseInt(t.props.attributes.id,10),searchTerm:"",footerRightPortal:null,fullPreview:!1,showBuilder:!1,builderUrl:e.builderUrl},t.state.selectScreen=-1===t.state.savedId,t.state.expanded=-1===t.state.savedId,t.toggleBlock=t.toggleBlock.bind(m()(t)),t.slideMain=t.slideMain.bind(m()(t)),t.rowSelected=t.rowSelected.bind(m()(t)),t.selectedTable=t.selectedTable.bind(m()(t)),t.updateSearch=t.updateSearch.bind(m()(t)),t.filteredTables=t.filteredTables.bind(m()(t)),t.saveTable=t.saveTable.bind(m()(t)),t.changeToSelect=t.changeToSelect.bind(m()(t)),t.setSelectScreen=t.setSelectScreen.bind(m()(t)),t.openNewTableBuilder=t.openNewTableBuilder.bind(m()(t)),t.openTableEditBuilder=t.openTableEditBuilder.bind(m()(t)),t.setBuilderVisibility=t.setBuilderVisibility.bind(m()(t)),t.updateSelection=t.updateSelection.bind(m()(t)),t.mainRef=c.a.createRef(),t.footerRightPortal=c.a.createRef(),t.portalTargetEditor=document.body.appendChild(document.createElement("div")),t}return f()(a,[{key:"componentDidMount",value:function(){this.slideMain(),this.setState({footerRightPortal:this.footerRightPortal}),this.setState({fullPreview:this.state.savedId>0})}},{key:"updateSelection",value:function(e){var t=this;return this.props.getTables().then((function(){t.setState({selectedId:Number.parseInt(e,10)}),t.saveTable()}))}},{key:"toggleBlock",value:function(e){e.preventDefault(),this.setState((function(e){return{expanded:!e.expanded}}))}},{key:"slideMain",value:function(){var e=this.state.expanded?"slideDown":"slideUp";jQuery(this.mainRef.current)[e]()}},{key:"filteredTables",value:function(){var e=this;return""===this.state.searchTerm?this.props.tables:this.props.tables.filter((function(t){var n=new RegExp("(".concat(e.state.searchTerm,")"),"gi");return n.test(t.title)||n.test("".concat(t.id))}))}},{key:"componentDidUpdate",value:function(e,t){this.slideMain(),this.props.setAttributes({id:this.state.savedId}),t.savedId!==this.state.savedId&&this.setState({fullPreview:!0})}},{key:"rowSelected",value:function(e){var t=this;return function(n){n.preventDefault(),t.setState({selectedId:e})}}},{key:"selectedTable",value:function(){var e=this;return this.props.tables.filter((function(t){return e.state.selectedId===t.id}))[0]}},{key:"savedTable",value:function(){var e=this;return this.props.tables.filter((function(t){return e.state.savedId===t.id}))[0]}},{key:"saveTable",value:function(){this.props.setSavedTable(this.state.selectedId),this.setState({savedId:this.state.selectedId,selectScreen:!1})}},{key:"updateSearch",value:function(e){this.setState({searchTerm:e})}},{key:"changeToSelect",value:function(){this.setState({selectScreen:!0})}},{key:"setSelectScreen",value:function(e){this.setState({selectScreen:e})}},{key:"setBuilderVisibility",value:function(e){this.setState({showBuilder:e})}},{key:"openNewTableBuilder",value:function(){this.setState({builderUrl:this.props.blockData.builderUrl,showBuilder:!0})}},{key:"openTableEditBuilder",value:function(){if(this.state.savedId>0){var e=new URL(this.props.blockData.builderUrl);e.searchParams.append("table",this.state.selectScreen?this.state.selectedId:this.state.savedId),this.setState({builderUrl:e.toString(),showBuilder:!0})}}},{key:"render",value:function(){var e=this;return c.a.createElement(o.Fragment,null,c.a.createElement(H,{header:Object(i.__)("Info","wp-table-builder"),table:this.state.selectScreen?this.selectedTable():this.props.savedTable}),c.a.createElement("div",{style:{display:this.state.fullPreview?"none":"grid"},className:"wptb-block-wrapper wptb-basic-appear-anim"},c.a.createElement(U,{show:this.props.isFetching()}),c.a.createElement("div",{className:"wptb-block-header"},c.a.createElement("div",{className:"wptb-plugin-left-toolbox"},c.a.createElement("div",{className:"wptb-plugin-brand"},"WP Table Builder"),c.a.createElement("div",{className:"wptb-plugin-selected-header-info"},this.props.savedTable?this.props.savedTable.title:Object(i.__)("No table selected","wp-table-builder"))),c.a.createElement("div",{className:"wptb-header-toolbox"},c.a.createElement("div",{className:"wptb-block-tool dashicons dashicons-insert",title:Object(i.__)("new table","wp-table-builder"),onClick:this.openNewTableBuilder}),this.filteredTables().length>0?c.a.createElement("div",{className:"wptb-block-tool dashicons dashicons-edit-large",title:Object(i.__)("edit table","wp-table-builder"),onClick:this.openTableEditBuilder,"data-disabled":!(Number.parseInt(this.state.savedId,10)>0)}):"",this.state.savedId>=0?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"wptb-block-tool dashicons dashicons-fullscreen-alt",onClick:function(){return e.setState({fullPreview:!0})},title:Object(i.__)("maximize preview","wp-table-builder")})):"",c.a.createElement("div",{className:"wptb-block-toggle dashicons wptb-block-tool","aria-expanded":this.state.expanded,onClick:this.toggleBlock}))),c.a.createElement("div",{ref:this.mainRef},c.a.createElement("div",{className:"wptb-block-main"},this.state.selectScreen?c.a.createElement(M,{searchTerm:this.state.searchTerm,updateSearch:this.updateSearch,selectedId:this.state.selectedId,rowSelected:this.rowSelected,filteredTables:this.filteredTables,selectedTable:this.selectedTable(),saveTable:this.saveTable,footerRightPortal:this.state.footerRightPortal,savedId:this.state.savedId,setSelectScreen:this.setSelectScreen}):c.a.createElement(A,{footerRightPortal:this.state.footerRightPortal,selectedTable:this.props.savedTable,changeToSelect:this.changeToSelect})),c.a.createElement("div",{className:"wptb-block-footer"},c.a.createElement("div",{className:"wptb-block-footer-left"}),c.a.createElement("div",{ref:this.footerRightPortal,className:"wptb-block-footer-right"})))),c.a.createElement("div",{style:{display:this.state.fullPreview?"flex":"none"},className:"wptb-block-full-preview wptb-basic-appear-anim"},c.a.createElement("div",{className:"dashicons dashicons-fullscreen-exit-alt wptb-block-minimize-button wptb-block-tool wptb-block-shadow",onClick:function(){return e.setState({fullPreview:!1})},title:Object(i.__)("minimize preview","wp-table-builder")}),c.a.createElement(B,{content:this.props.savedTable?this.props.savedTable.content:null})),c.a.createElement(z,{id:"wptbEditorPortal",targetEl:this.portalTargetEditor},c.a.createElement(W,{builderVisibility:this.setBuilderVisibility,show:this.state.showBuilder,builderUrl:this.state.builderUrl,updateSelection:this.updateSelection})))}}]),a}(c.a.Component));function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){w()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=E()(t);if(n){var a=E()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return g()(this,e)});function a(e){var t;b()(this,a),t=r.call(this,e);var n=e.attributes,l=e.setAttributes,o=e.blockData;return t.setSavedTable=t.setSavedTable.bind(m()(t)),t.state={tables:[],attributes:n,setAttributes:l,savedTable:null,setSavedTable:t.setSavedTable,blockData:o,fetching:!1,isFetching:function(){return t.state.fetching},setFetch:function(e){t.setState({fetching:e})},getTables:function(){return t.state.setFetch(!0),T()({path:"/wp/v2/wptb-tables?status=draft&per_page=-1"}).then((function(e){t.setState({tables:e.filter((function(e){return!u()(e.meta._wptb_prebuilt_,1)[0]})).map((function(e){return Q(Q({},e),{id:e.id,content:e.meta._wptb_content_,title:""===e.title.rendered||"Untitled"===e.title.rendered?"".concat(Object(i.__)("Table","wp-table-builder")," #").concat(e.id):e.title.rendered})}))}),t.state.setFetch(!1)}))}},t}return f()(a,[{key:"setSavedTable",value:function(e){this.setState({savedTable:this.state.tables.filter((function(t){return t.id===e}))[0]})}},{key:"componentDidMount",value:function(){var e=this;this.state.getTables().then((function(){e.setSavedTable(e.state.attributes.id)}))}},{key:"render",value:function(){return c.a.createElement(x.Provider,{value:this.state},c.a.createElement($,null))}}]),a}(c.a.Component);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n(27);var K=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},wptbBlockData);wptbBlockData=void 0,Object(l.registerBlockType)(K.blockName,{title:Object(i.__)("WP Table Builder","wp-table-builder"),description:Object(i.__)("WP Table Builder editor block","wp-table-builder"),category:"widgets",icon:"editor-table",attributes:{id:{type:"number",default:"-1"}},transforms:{from:[{type:"shortcode",tag:"wptb",attributes:{id:{type:"number",shortcode:function(e){var t=e.named;return Number.parseInt(t.id,10)}}},priority:1}]},edit:function(e){var t=e.attributes,n=e.setAttributes;return c.a.createElement(X,{attributes:t,setAttributes:n,blockData:K})},save:function(e){var t=e.attributes;return t.id>=0?"[wptb id=".concat(t.id,"]"):""}})}]);
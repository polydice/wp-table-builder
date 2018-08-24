var WPTB_ElementOptions = function(element,index){

	var node = element.getDOMElement(), elemIdClass;

	prop = document.querySelector(".wptb-" + element.kind + "-options-prototype").cloneNode(true);
    prop.classList.remove("wptb-" + element.kind + "-options-prototype"); // remove prototype from the class
    elemIdClass='wptb-options-' + element.kind + "-" +  index;

    var properties = prop.getElementsByClassName('wptb-element-property');

    for (var i = 0; i < properties.length; i++) {
    	properties[i].dataset.element = elemIdClass;
    }

    prop.classList.add(elemIdClass);
    document.getElementById("element-options-group").appendChild(prop);

    node.onclick = function(){
        var infArr = this.className.match(/wptb-element-((.+-)\d+)/i),
			optionsClass = '.wptb-' + infArr[2] + 'options' +
                        '.wptb-options-' + infArr[1];

    	document.getElementById('add-elements').getElementsByTagName('a')[0].classList.remove('active');
        document.getElementById('element-options').getElementsByTagName('a')[0].classList.add('active');
		
		document.getElementsByClassName('wptb-elements-container')[0].style.display = 'none';
        document.getElementsByClassName('wptb-settings-section')[0].style.display = 'none';
        document.getElementById("element-options-group").style.display = 'block';

        var children = document.getElementById("element-options-group").childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].style)
                children[i].style.display = 'none';
        }

        document.querySelector(optionsClass).style.display = 'block';
    };

    var optionControls = prop.getElementsByClassName('wptb-element-property');
    console.log(optionControls);
    for (var i = 0; i < optionControls.length; i++) {
    	if(optionControls[i].classList.contains('wptb-color-picker')){
    		jQuery(optionControls[i]).wpColorPicker({
                change: function(event, ui){
                    var parent = event.target, classe, type, ps, number;
 


                    classe = parent.dataset.element.match(/wptb-options-(.+)-(\d+)/i);
                    type = classe[1];
                    number = classe[2];
                    console.log('Element','wptb-element-'+type+'-'+number);
                    affectedEl = document.getElementsByClassName('wptb-element-'+type+'-'+number)[0];
                    ps = affectedEl.getElementsByTagName("p");
                    for (var i = 0; i < ps.length; i++) {
                            ps[i].style.color =  ui.color.toString();
                    } 
                }
            });
    	}

        if(optionControls[i].dataset.type === 'font-size'){
            var slider = optionControls[i].parentNode.parentNode.getElementsByClassName('wptb-text-font-size-slider')[0];
            slider.oninput = function(){
                this.parentNode.parentNode.getElementsByClassName('wptb-text-font-size-number')[0].value = this.value;
                this.parentNode.parentNode.getElementsByClassName('wptb-text-font-size-number')[0].onchange();
            }
        }

    	optionControls[i].onchange = function(event){

    		var n_Class = this.dataset.element,
    			infArr = n_Class.match(/wptb-options-(.+)-(\d+)/i),
				type = infArr[1],
                num = infArr[2],
    			affectedEl = document.getElementsByClassName('wptb-element-'+type+'-'+num)[0],
    			val = this.value;

                console.log('Event triggered',this.dataset.type,this.value);

    		switch(this.dataset.type){
                case 'src':
                        var img = affectedEl.getElementsByTagName("img");
                        img.src=this.value;
                        break;
                        break;
                    case 'alternative-text':
                        var img = affectedEl.getElementsByTagName("img");
                        img.alt=this.value;
                        break;
                    case 'image-width':
                        var img = affectedEl.getElementsByTagName("img");
                        img.width=this.value+'px';
                        break;
                        break;
                    case 'image-height':
                        var img = affectedEl.getElementsByTagName("img");
                        img.height=this.value+'px';
                        break;
                        break;
    			case 'font-size':
                        var ps = affectedEl.getElementsByTagName("p");
                        for (var i = 0; i < ps.length; i++) {
                            ps[i].style.fontSize =  val + 'px';
                        }

                        this.parentNode.parentNode.getElementsByClassName('wptb-text-font-size-slider')[0].value = this.value;
                        
                        break;
                    case 'color':
                        var ps = affectedEl.getElementsByTagName("p");
                        for (var i = 0; i < ps.length; i++) {
                            ps[i].style.color =  val;
                        } 
                        break;
                    case 'list-class':
                        if (val == 'unordered') {
                            affectedEl.querySelector('[data-type=list-style-type]').parentNode.style.display= 'flex';
                            var bullets = element.querySelectorAll('article .wptb-list-item-style-dot li');
                            for (var i = 0; i < bullets.length; i++) {
                                bullets[i].style.listStyleType= 'disc';
                            }
                            document.querySelector('[data-type=list-style-type]').value = 'disc';
                        } else {
                            affectedEl.querySelector('[data-type=list-style-type]').parentNode.style.display= 'none'; 
                            var bullets = element.querySelectorAll('article .wptb-list-item-style-dot li');
                            for (var i = 0; i < bullets.length; i++) {
                                bullets[i].style.listStyleType= 'decimal';
                            } 
                        }
                        break; 
                    case 'list-style-type':
                            var bullets = element.querySelectorAll('article .wptb-list-item-style-dot li');
                            for (var i = 0; i < bullets.length; i++) {
                                bullets[i].style.listStyleType= val.toLowerCase();
                            } 
                        break;
    		}
    	};
    }
};
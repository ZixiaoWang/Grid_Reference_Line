(function(){
    function createEle(type, props){
        var ele = document.createElement(type);
        if(props.className!=null){ele.className=props.className;}
        if(props.id!=null){ele.setAttribute('id', props.id);}
        if(props.text!=null){ele.appendChild(document.createTextNode(props.text));}
        return ele;
    }
    
    var cssNode = document.createElement('style');
    var css = '#gridContainer{height:100vh; position:absolute; z-index:10000; pointer-events: none; top:0px; left:50%; border-left:1px dashed #333; border-right:1px dashed #333; display: none;}'
                +'.eachgridcolumn{width:8.3333%; box-sizing:border-box; border-right:1px dashed red; position:relative; float:left; height:100vh;display: none;}'
                +'.eachgridcolumn:last-of-type{border-right:none;}.eachgridcolumn>div{display: none;}.eachgridcolumn>.mdc{width: calc(100% - 20px); height: 100vh; background-color: rgba(128,179,255,0.2); position: absolute; top: 0px; left: 10px;}'
                +'.eachgridcolumn>.lpadding{width:10px; height: 100vh; background-color: rgba(93,255,93,0.2); position: absolute; left: 0px; top: 0px;}'
                +'.eachgridcolumn>.rpadding{width:10px; height: 100vh; background-color: rgba(93,255,93,0.2); position: absolute; right: 0px; top: 0px;}'
                +'#ctrlPanel{position: fixed; top:50%; right:0px; width:150px; height:310px; margin-top:-155px; background-color: white; box-shadow: 0px 0px 10px #CCC; padding:10px; box-sizing: border-box;}'
                +'#ctrlPanel>button{width:100%; background-color: white; border: 2px solid orange; margin-bottom: 10px; padding:5px 0px; cursor: pointer;}'
                +'#ctrlPanel>button:focus{outline: none;}#ctrlPanel>hr{margin: 0px; margin-bottom: 10px;}';
    var cssTxtNode = document.createTextNode(css);
    cssNode.appendChild(cssTxtNode);
    var _cp = createEle('div', {id:'ctrlPanel'});
    var _btn320 = createEle('button', {id:'btn320', text:'| 320px |'});
    var _btn640 = createEle('button', {id:'btn640', text:'| 640px |'});
    var _btn960 = createEle('button', {id:'btn960', text:'| 960px |'});
    var _btn1200 = createEle('button', {id:'btn1200', text:'| 1200px |'});
    var _btnShowColumn = createEle('button', {id:'colBtn', text:'Show Column'});
    var _btnShowPadding = createEle('button', {id:'paddingBtn', text:'Show Padding'});
    var _btnhp = createEle('button', {id:'panelshowup', text:'Hide Panel'});
    
    var _gc = createEle('div', {id:'gridContainer'});
    var _egc = createEle('div', {className:'eachgridcolumn'});
    var _lp = createEle('div', {className:'lpadding'});
    var _rp = createEle('div', {className:'rpadding'});
    var _mdc = createEle('div', {className:'mdc'});
    
    var _pcner = createEle('div', {className:'pcnner'});
    _cp.appendChild(_btn320);
    _cp.appendChild(_btn640);
    _cp.appendChild(_btn960);
    _cp.appendChild(_btn1200);
    _cp.appendChild(createEle('hr',{className:null}));
    _cp.appendChild(_btnShowColumn);
    _cp.appendChild(_btnShowPadding);
    _cp.appendChild(createEle('hr',{className:null}));
    _cp.appendChild(_btnhp);
    
    _egc.appendChild(_lp);
    _egc.appendChild(_mdc);
    _egc.appendChild(_rp);
    
    for(let i = 0; i < 12; i++){ _gc.appendChild(_egc.cloneNode(true));  }
    
    _pcner.appendChild(cssNode);
    _pcner.appendChild(_cp);
    _pcner.appendChild(_gc);
    console.log(_pcner);
    
    document.getElementsByTagName('body')[0].parentNode.insertBefore(_pcner, document.getElementsByTagName('body')[0].nextSibling);
    
    var panel = {panel:document.getElementById('ctrlPanel'), show:false};
    var gc = document.getElementById('gridContainer');
    var btn320 = {btn:document.getElementById('btn320'), click:false};
    var btn640 = {btn:document.getElementById('btn640'), click:false};
    var btn960 = {btn:document.getElementById('btn960'), click:false};
    var btn1200 = {btn:document.getElementById('btn1200'), click:false};
    var cols = {cols:document.querySelectorAll('.eachgridcolumn'), show:false};
    var colbtn = {btn:document.getElementById('colBtn'), click:false};
    var paddings = {paddings:document.querySelectorAll('.eachgridcolumn>div'), show:false};
    var pb = {btn:document.getElementById('paddingBtn'), click:false};
    var hidepanel = {btn:document.getElementById('panelshowup'), click:false};
    var ControlPanel = function(){
        
        return {
            showPanel:function(){if(panel.show){panel.panel.style.opacity = 1; panel.show = !panel.show; return this;}else{panel.panel.style.opacity = 0.1; panel.show = !panel.show; return this;} },
            show320:function(){
                if(btn640.click){ControlPanel().show640();}
                if(btn960.click){ControlPanel().show960();}
                if(btn1200.click){ControlPanel().show1200();}
                
                if(!btn320.click){
                    gc.style.width = '320px';
                    gc.style.marginLeft = '-160px';
                    gc.style.display = 'block';
                    btn320.btn.style.background='orange';
                    btn320.btn.style.color='white';
                    btn320.click = !btn320.click;
                    return this;
                }else{
                    gc.style.display = 'none';
                    btn320.btn.style.background='white';
                    btn320.btn.style.color='black';
                    btn320.click = !btn320.click;
                    return this;
                }
            },
            
            show640:function(){
                if(btn320.click){ControlPanel().show320();}
                if(btn960.click){ControlPanel().show960();}
                if(btn1200.click){ControlPanel().show1200();}
                if(!btn640.click){
                    gc.style.width = '640px';
                    gc.style.marginLeft = '-320px';
                    gc.style.display = 'block';
                    btn640.btn.style.background='orange';
                    btn640.btn.style.color='white';
                    btn640.click = !btn640.click;
                    return this;
                }else{
                    gc.style.display = 'none';
                    btn640.btn.style.background='white';
                    btn640.btn.style.color='black';
                    btn640.click = !btn640.click;
                    return this;
                }
            },
            
            show960:function(){
                if(btn640.click){ControlPanel().show640();}
                if(btn320.click){ControlPanel().show320();}
                if(btn1200.click){ControlPanel().show1200();}
                if(!btn960.click){
                    gc.style.width = '960px';
                    gc.style.marginLeft = '-480px';
                    gc.style.display = 'block';
                    btn960.btn.style.background='orange';
                    btn960.btn.style.color='white';
                    btn960.click = !btn960.click;
                    return this;
                }else{
                    gc.style.display = 'none';
                    btn960.btn.style.background='white';
                    btn960.btn.style.color='black';
                    btn960.click = !btn960.click;
                    return this;
                }
            },
            
            show1200:function(){
                if(btn320.click){ControlPanel().show320();}
                if(btn640.click){ControlPanel().show640();}
                if(btn960.click){ControlPanel().show960();}
                
                if(!btn1200.click){
                    gc.style.width = '1200px';
                    gc.style.marginLeft = '-600px';
                    gc.style.display = 'block';
                    btn1200.btn.style.background='orange';
                    btn1200.btn.style.color='white';
                    btn1200.click = !btn1200.click;
                    return this;
                }else{
                    gc.style.display = 'none';
                    btn1200.btn.style.background='white';
                    btn1200.btn.style.color='black';
                    btn1200.click = !btn1200.click;
                    return this;
                }
            },
            
            showCol:function(){
                if(cols.show){
                    colbtn.btn.style.background = 'white';
                    colbtn.btn.style.color='black';
                    for(let i=0; i<cols.cols.length; i++){
                        cols.cols[i].style.display = 'none';
                    }
                    cols.show = !cols.show;
                    colbtn.click = !colbtn.click;
                    return this;
                }else{
                    colbtn.btn.style.background = 'orange';
                    colbtn.btn.style.color='white';
                    for(let i=0; i<cols.cols.length; i++){
                        cols.cols[i].style.display = 'block';
                    }
                    cols.show = !cols.show;
                    colbtn.click = !colbtn.click;
                    return this;
                }
            },
            
            showPadding:function(){
                if(pb.click){
                    pb.btn.style.background='white';
                    pb.btn.style.color='black';
                    for(let i=0; i<paddings.paddings.length;i++){
                        paddings.paddings[i].style.display='none';
                    }
                    pb.click=!pb.click;
                    paddings.show=!paddings.show;
                    return this;
                }else{
                    pb.btn.style.background='orange';
                    pb.btn.style.color='white';
                    for(let i=0; i<paddings.paddings.length;i++){
                        paddings.paddings[i].style.display='block';
                    }
                    pb.click=!pb.click;
                    paddings.show=!paddings.show;
                    return this;
                }
            }
        }
        
        
    }
    var c = new ControlPanel();
    btn320.btn.addEventListener('click', c.show320);
    btn640.btn.addEventListener('click', c.show640);
    btn960.btn.addEventListener('click', c.show960);
    btn1200.btn.addEventListener('click', c.show1200);
    colbtn.btn.addEventListener('click', c.showCol);
    pb.btn.addEventListener('click', c.showPadding);
    btn960.btn.addEventListener('click', c.show960);
    hidepanel.btn.addEventListener('click', c.showPanel);
})();
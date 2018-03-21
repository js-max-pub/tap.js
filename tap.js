TAPJS = {
    TREE: node => {
        console.log('TREE',node);
        var list = [];
        while(node){
            list.push(node);
            node = node.parentElement;
        }
        return list;
    },

    ACT: (ev,attr) => {
        // LOG(`EVENT: ${ev.type} (${attr})`);
        // console.log(ev.composedPath? ev.composedPath():'none');
        if(ev.composedPath) var path = ev.composedPath();
        else var path = TAPJS.TREE(ev.target);
        console.log('path',path);
        CEs = path.filter(x=>(x.tagName && x.tagName.includes('-')));
        CEs.push(window);
        // console.log('CEs',CEs);

        // var CE = ev.target;
        ev = JSON.parse(JSON.stringify(ev));

        for(var i=0; i<path.length; i++){
            var el = path[i];
            if(!el.getAttribute) continue;
            // LOG('check '+ el.tagName);
            // console.log('check',el);
            // if(el.hasAttribute(attr)){
            var fn = el.getAttribute(attr);
            // LOG(`found ${el.tagName}  (${fn})`);
            ev.target = el;
            if(fn){
                var ces = CEs.filter(ce=>ce[fn]);
                ces.forEach(ce=>ce[fn](ev));
                if(!ces.length) console.warn(fn,'not found');
            }
                // if(CE[fn]) CE[fn](ev);
                // else if(window[fn]) window[fn](ev);
                // else console.warn(fn,'not found');
        }
    }
}

window.addEventListener('click', ev => {
    // LOG('click-delta '+Math.round(window.performance.now() - window.TOUCHEND));
    if(window.performance.now() - TAPJS.TOUCHEND < 500) return ev.preventDefault();
    TAPJS.ACT(ev, 'on-tap');
});

window.addEventListener('touchstart', ev => TAPJS.TOUCHMOVE = false);
window.addEventListener('touchmove', ev => TAPJS.TOUCHMOVE = true);
window.addEventListener('touchend', ev => {
    TAPJS.TOUCHEND = window.performance.now();
    if (!TAPJS.TOUCHMOVE) TAPJS.ACT(ev, 'on-tap');
});


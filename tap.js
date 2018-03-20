TAPJS = {
    TREE: node => {
        while(node){
            list = node;
            node = node.parentElement;
        }
        return list;
    },

    ACT: (ev,attr) => {
        // LOG(`EVENT: ${ev.type} (${attr})`);
        
        if(ev.composedPath) var path = ev.composedPath();
        else var path = TAPJS.TREE(ev.target);
        // console.log('path',path);

        var CE = ev.target;
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
            if(fn)
                if(CE[fn]) CE[fn](ev);
                else if(window[fn]) window[fn](ev);
                else console.warn(fn,'not found');
            // }
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


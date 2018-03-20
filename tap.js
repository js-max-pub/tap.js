BUBBLEUP = (ev, attr) => {
    // console.log('EVENT', ev.type);
    alert('EVENT '+ ev.type);
    if(ev.composed) var source = ev.composedPath()[0];
    else var source = ev.target;
    var CE = ev.target;
    ev = JSON.parse(JSON.stringify(ev));
    var findAttr = (el,fn) => {
        if(!el) return;
        if(el.hasAttribute(attr)) fn(el);
        findAttr(el.parentElement);
    }
    findAttr(source, el=>{
        var fn = el.getAttribute(attr);
        // console.log('found',el,attr,fn);
        ev.target = el;
        if(CE[fn]) CE[fn](ev);
        else if(window[fn]) window[fn](ev);
        else console.warn(fn,'not found');
    });    
}

window.addEventListener('click', ev => {
    BUBBLEUP(ev, 'on-tap');
});

window.addEventListener('touchstart', ev => TOUCHMOVE = false);
window.addEventListener('touchmove', ev => TOUCHMOVE = true);
window.addEventListener('touchend', ev => {
    if (!TOUCHMOVE) BUBBLEUP(ev, ' on-tap');
});



    // var CE = ev.target;
    // var path = ev.composedPath();
    // for (var i = 0; i < path.length; i++) {
    //     console.log('path',path[i]);
    //     var fn = path[i].getAttribute(attr);
    //     ev2.target = path[i];
    //     if (CE[fn]) CE[fn](ev2);
    // }


// window.addEventListener('keyup', ev => {
//     if (ev.key == 'Enter') BUBBLEUP(ev, 'on-enter');
// });



// var CE = ev.target;
// var fn = ev.composedPath()[0].getAttribute('on-tap');
// CE[fn](ev);


// var CE = ev.target;
// var path = ev.composedPath();
// for(var i=0; i<path.length; i++){
// 	var fn = path[i].getAttribute('on-tap');
// 	ev.target = path[i];
// 	if(fn) CE[fn](ev);
// }
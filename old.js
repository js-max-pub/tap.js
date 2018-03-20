

// BUBBLEUP = (ev, attr) => {
//     // console.log('EVENT', ev.type);
//     // LOG('CP3 '+ ev.target.tagName + ' : ' + ev.target.getAttribute('on-tap'));
//     // return;
//     LOG('EVENT: '+ ev.type + `(${attr})`);
//     if(ev.composedPath) var source = ev.composedPath()[0];
//     else var source = ev.target;
//     // LOG('CP0 '+ ev.composedPath()[0].tagName + ' : ' + ev.composedPath()[0].getAttribute(attr));
//     // LOG('CP1 '+ source.tagName + ' : ' + source.getAttribute('data-demo'));
//     // LOG('CP2 '+ source.tagName + ' : ' + source.id);
//     var CE = ev.target;
//     ev = JSON.parse(JSON.stringify(ev));
//     var findAttr = (el,fn) => {
//         if(!el) return;
//         LOG('check '+ el.tagName + ' : ' + attr + ' : ' + el.getAttribute(attr));
//         if(el.hasAttribute(attr)) fn(el);
//         findAttr(el.parentElement);
//     }
//     findAttr(source, el=>{
//         var fn = el.getAttribute(attr);
//         LOG(`found ${el.tagName}, ${attr}, ${fn}`);
//         ev.target = el;
//         if(CE[fn]) CE[fn](ev);
//         else if(window[fn]) window[fn](ev);
//         else console.warn(fn,'not found');
//     });    
// }



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
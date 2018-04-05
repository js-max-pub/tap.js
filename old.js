// TAPJS.TREE2 = node => {
//     console.log('TREE', node);
//     var list = [];
//     while (node) {
//         list.push(node);
//         node = node.parentElement;
//     }
//     return list;
// };

// TAPJS.ACT2 = ev => {
//     console.log(`EVENT-ACT: ${ev.type}`,ev.target,ev);
//     var path = ev.composedPath ? ev.composedPath() : TAPJS.PATH(ev.target);
//     console.log('path', path);
//     var CEs = path.filter(x => (x.tagName && x.tagName.includes('-')));
//     CEs.push(window);
//     var CE = CEs[0];
//     console.log('CEs',CEs);

//     // var CE = ev.target;
//     ev = JSON.parse(JSON.stringify(ev));

//     for (var i = 0; i < path.length; i++) {
//         var el = path[i];
//         if (!el.getAttribute) continue;
//         // LOG('check '+ el.tagName);
//         // console.log('check',el);
//         // if(el.hasAttribute(attr)){
//         var fn = el.getAttribute('on-tap');
//         // LOG(`found ${el.tagName}  (${fn})`);
//         ev.target = el;
//         if (fn) {
//             // if (CE[fn]) CE[fn](ev);
//             // else console.warn(fn, 'not found');
//             var ces = CEs.filter(ce=>ce[fn]);
//             if(!ces.length) console.warn(fn,'not found');
//             ces[0][fn](ev);
//             // ces.forEach(ce=>ce[fn](ev));
//         }
//         // if(CE[fn]) CE[fn](ev);
//         // else if(window[fn]) window[fn](ev);
//         // else console.warn(fn,'not found');
//     }
// }






        // console.log('EVENT-FIRE',base);

// LOG('click-delta '+Math.round(window.performance.now() - window.TOUCHEND));
// this.dispatchEvent( new CustomEvent('tap', {bubbles: true});
//TAPJS.ACT(ev, 'on-tap');

// this.dispatchEvent( new CustomEvent('tap', {bubbles: true})        
//TAPJS.ACT(ev, 'on-tap');




    // console.log('TREE', TAPJS.TREE(ev.target));
    // console.log('composed', ev.composedPath());

    // return;
    // console.log(ev.composedPath? ev.composedPath():'none');
    // if (ev.composedPath) var path = ev.composedPath();
    // else var path = TAPJS.PATH(ev.target);



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
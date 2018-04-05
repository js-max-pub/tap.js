TAPJS.ACT = ev => {
    var path = ev.composedPath ? ev.composedPath() : TAPJS.PATH(ev.target);
    TAPJS.BUBBLE(path);
}
TAPJS.PATH = node => {
    // console.log('TREE-rec', node);
    if(!node) return [];
    return [node].concat(TAPJS.TREE(node.parentElement))
};

TAPJS.BUBBLE = path => {
    // console.log('BUBBLE', path);
    var node = path.shift();
    if (!node) return;
    if (node.getAttribute) {
        var fn = node.getAttribute('on-tap');
        if (fn) {
            var CEs = [node].concat(path.filter(x => (x.tagName && x.tagName.includes('-')))).concat([window]);
            var CEsFN = CEs.filter(CE=>CE[fn]);
            if(CEsFN.length) CEsFN[0][fn]({target:node});
            else console.warn(fn,'not found in',CEs);
            
            // ces.forEach(ce=>ce[fn](ev));
        }
    }
    TAPJS.BUBBLE(path);
}
window.addEventListener('tap', TAPJS.ACT);


TAPJS = {
    event:(ev)=>{
        var base = ev.composedPath ? ev.composedPath()[0] : ev.target;
        base.dispatchEvent( new CustomEvent('tap', {bubbles: true,composed: true}));
    }
}
window.addEventListener('click', ev => {
    if(window.performance.now() - TAPJS.TOUCHEND < 500) 
        return ev.preventDefault();
    TAPJS.event(ev);
});

window.addEventListener('touchstart', ev => TAPJS.TOUCHMOVE = false);
window.addEventListener('touchmove', ev => TAPJS.TOUCHMOVE = true);
window.addEventListener('touchend', ev => {
    TAPJS.TOUCHEND = window.performance.now();
    if (!TAPJS.TOUCHMOVE) 
        TAPJS.event(ev);
});





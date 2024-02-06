/*
    delegate(document.body, 'click', 'button', function (e) {
        this.classList.toggle('active');
    });
*/

export function delegate(parent, event, selector, callback) {
    const listener = (e) => {
        const currentTarget = e.target.closest(selector);
        if (!currentTarget) {
            return;
        }
        const newEvent = {};
        for (const i in e) {
            newEvent[i] = e[i];
        }
        newEvent.innerEvent = e;
        newEvent.currentTarget = currentTarget;
        callback.call(currentTarget, newEvent);
    };
    parent.addEventListener(event, listener, false);
    return () => {
        parent.removeEventListener(event, listener, false);
    };
}

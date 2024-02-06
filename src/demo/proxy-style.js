/*


style('#app') // Returns the style object in a Proxy
    .color('#fff') // Updates color and returns a Proxy
    .backgroundColor('#000') // Updates bgColor and returns a Proxy
    .opacity('1'); // ... and so on so forth


*/
const styleProxy = {
    get: (object, property) => {
        return (value) => {
            if (value) {
                object[property] = value;
                return new Proxy(object, styleProxy);
            }
            return object[property];
        };
    },
};

export const style = (selector) => {
    const element = document.querySelector(selector);
    return new Proxy(element.style, styleProxy);
};

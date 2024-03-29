import { html, svg } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';

export function Shape(props) {
    const { vertices, size, fill, label, transforms, children = false } = props;
    return createShape({
        children,
        vertices,
        size,
        fill,
        label,
        transforms,
    });
}

// god bless http://jxnblk.com/react-icons/
let rad = function (a) {
    return (Math.PI * a) / 180;
};

let rx = function (r, a, c) {
    return c + r * Math.cos(rad(a));
};

let ry = function (r, a, c) {
    return c + r * Math.sin(rad(a));
};

let num = function (n) {
    return n < 0.0000001 ? 0 : n;
};

const createShape = (props) => {
    let size = props.size || 96;
    let c = size / 2;
    let r1 = (1 * size) / 2;
    let angle = 360 / props.vertices;
    let offset = 90;
    let fill = props.fill || 'red';
    let viewBox = [0, 0, size, size].join(' ');
    let draw = function (n) {
        var d = [];
        for (var i = 0; i < n; i++) {
            var a = angle * i - offset;
            var line = [
                i === 0 ? 'M' : 'L',
                num(rx(r1, a, c)),
                num(ry(r1, a, c)),
            ].join(' ');
            d.push(line);
        }
        return d.join(' ');
    };

    const datum = [draw(props.vertices)].join(' ');
    if (props.children) {
        return html`
            <div class="col-center align-center shape-with-label">
                ${createSvg(size, viewBox, fill, datum, props.transforms)}
                ${props.children}
            </div>
        `;
    }
    if (props.label) {
        return html`
            <div class="col-center align-center shape-with-label">
                ${createSvg(size, viewBox, fill, datum, props.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${props.label}
                </p>
            </div>
        `;
    } else {
        return html`
            ${createSvg(size, viewBox, fill, datum, props.transforms)}
        `;
    }
};

function createSvg(size, viewBox, fill, datum, transforms) {
    let itemStyles = {
        pointerEvents: 'none',
        transformOrigin: 'center',
        transform: `${transforms ?? ''}`,
    };
    return svg`<svg
    viewBox=${viewBox}
    width=${size}
    height=${size}
    fill=${fill}
    style="${styleMap(itemStyles)}"
      focusable="false"
        
  >
    <path d=${datum} />
  </svg>`;
}

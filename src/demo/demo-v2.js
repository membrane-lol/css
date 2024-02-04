import { html, render } from 'lit-html';

// data-intrinsic-grid="${isPortrait ? '' : 'md'}"
/*
  <picture>
    <source
        srcset="
            https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80
        "
        alt=" "
        media="(prefers-color-scheme: dark)"
    />
    <img
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        alt=" "
    />
</picture>
*/

const font = html` <div
    data-group="flex"
    data-gap="xl"
    data-place-items="baseline"
>
    <p data-font="xs">Aa AA</p>
    <p data-font="sm">Aa AA</p>
    <p data-font="md">Aa AA</p>
    <p data-font="">Aa AA</p>
    <p data-font="lg">Aa AA</p>
    <p data-font="xl">Aa AA</p>
    <p data-font="xxl">Aa AA</p>
</div>`;

const iconNames = [
    'chevronLeft',
    'chevronRight',
    'chevronDown',
    'chevronUp',
    'caretLeft',
    'caretRight',
    'caretDown',
    'caretUp',
    'arrowDown',
    'arrowUp',
    'slash',
    'handle',
    'check',
    'cross',
    'plus',
    'dotsY',
    'dotsX',
    'minus',
    'heart',
    'bookmark',
    'pin',
    'star',
    'github',
];

const icons = html`
    <div
        data-group="flex"
        data-flex-wrap
        data-gap="xl"
        data-place-items="baseline"
    >
        ${iconNames.map(
            (icon) =>
                html`<div tooltip="${icon}">
                    ${Icon({ d: icon, label: icon, size: 48 })}
                </div>`
        )}
    </div>
`;

const scroller = html`
    <div data-scroller="">
        <div>
            ${[...Array(12)].map(
                (_num, number) =>
                    html` <div
                        data-ratio="landscape"
                        data-scroller-item="${[0, 1, 2, 10].includes(number)
                            ? 'lg'
                            : [6, 7, 12].includes(number)
                            ? 'sm'
                            : ''}"
                    >
                        <picture>
                            <source
                                srcset="
                                    https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80
                                "
                                alt=" "
                                media="(prefers-color-scheme: dark)"
                            />
                            <img
                                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=" "
                            />
                        </picture>
                    </div>`
            )}
        </div>
    </div>
`;

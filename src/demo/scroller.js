import { html } from 'lit-html';
import { cx } from 'cva';

export const scroller = html`
    <div class="scroller">
        <div>
            ${[...Array(12)].map(
                (_num, number) =>
                    html` <div
                        class="${cx(
                            [0, 1, 2, 10].includes(number)
                                ? 'scroller-item-lg'
                                : [6, 7, 12].includes(number)
                                ? 'scroller-item-sm'
                                : '',
                            'ratio landscape'
                        )}"
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

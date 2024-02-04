import { html, render, svg } from 'lit-html';
import {
    line,
    lineShort,
    lineShortSpan,
    lineShortXL,
    lineShortXXL,
    lineSlot,
    lineSlotStart,
    lines,
} from './demo/skeletons.js';
import { row, unit } from './css/flex.js';
import { button, buttonGroup } from './css/button.js';
import { intrinsic } from './css/intrinsic.js';
import { ratio } from './css/ratio.js';
import { input } from './css/input.js';
import { item } from './css/slot.js';
import { list } from './css/list.js';
import { cx } from 'cva';

const sprite = new URL('./svg/sprite.svg', import.meta.url);

export function Icon({ d, size, label }) {
    return svg`<svg
      width="${size}px"
      height="${size}px"
      focusable="false"
      data-icon
      aria-labelledby="${label}-icon"
    viewbox="0 0 ${size} ${size}"
    >
      <title id="${label}-icon">{label} </title>
      <use href="${sprite}#${d}" />
    </svg>
  `;
}

const unitDemo = html`
    <div class="${row({ intent: 'wrap', gap: 'xl' })}">
        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo',
            })}"
        >
            ${Icon({ d: 'heart', label: 'heart', size: 24 })}
            <p
                data-font
                data-font-number
                tooltip="Text is short, 1 line"
                flow="right"
                data-animation-wiggle-hover
                class="red"
            >
                ${lineSlotStart}
            </p>
        </div>
        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo',
            })}"
        >
            ${Icon({ d: 'heart', label: 'heart', size: 24 })}

            <p
                data-font
                data-font-number
                tooltip="Text is long, new line"
                flow="right"
                data-animation-wiggle-hover
            >
                ${lineShort}
            </p>
        </div>

        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo',
            })}"
        >
            <p data-font data-font-number>${lineShort}</p>
            ${Icon({ d: 'star', label: 'star', size: 24 })}
        </div>
        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo',
            })}"
        >
            <p data-font data-font-number>${lineSlotStart}</p>
            ${Icon({ d: 'star', label: 'star', size: 24 })}
        </div>
        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo unit-width-demo-xl',
            })}"
        >
            <input type="checkbox" name="option" value="D" id="checkbox-d" />
            <label for="checkbox-d"> ${lineShortXXL} </label>
        </div>

        <div
            class="${unit({
                intent: 'center',
                paddingXY: 'sm',
                gap: 'sm',
                class: 'unit-width-demo unit-width-demo-xl',
            })}"
        >
            <input type="checkbox" name="option" value="D" id="checkbox-d" />
            <label for="checkbox-d"> ${line} </label>
        </div>
        <div
            class="${unit({
                intent: 'center',
                gap: 'xl',
                class: 'switch-has-label place-content-start',
            })}"
        >
            <input
                class="switch"
                type="checkbox"
                name="option"
                value="F"
                id="checkbox-f"
            />
            <label for="checkbox-f" class="label-a"> N </label>
            <label for="checkbox-f" class="label-b"> Y </label>
        </div>

        <a href="javascript:;">Link</a>
        <a href="javascript:;" class="${button({ intent: 'link' })}"
            >${lineShortSpan}</a
        >
        <a
            href="javascript:;"
            class="${button({ intent: 'link', size: 'small' })}"
            >${lineShortSpan}</a
        >
        <button class="${button()}" type="button">${lineShortSpan}</button>
        <button class="${button({ size: 'small' })}" type="button">
            ${lineShortSpan}
        </button>

        <button
            class="${button({ intent: 'rounded' })}"
            type="button"
            aria-label="Like"
        >
            ${Icon({ d: 'heart', label: 'heart', size: 36 })}
        </button>
        <div class="${buttonGroup({ intent: 'x' })}">
            ${[...Array(4)].map(
                (_) =>
                    html` <button class="${button()}" type="button">
                        ${lineShortSpan}
                    </button>`
            )}
        </div>
        <div class="${buttonGroup({ intent: 'y' })}">
            ${[...Array(4)].map(
                (_) =>
                    html` <button class="${button()}" type="button">
                        ${lineShortSpan}
                    </button>`
            )}
        </div>
    </div>
`;

const footer = html`
    <div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Flex and margin-auto"
            flow="right"
            style="text-decoration: none"
            class="${button({ intent: 'rounded' })}"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>
        <button
            data-button-opens="margin-auto"
            type="button"
            class="${button({ intent: 'rounded', class: 'red' })}"
            tooltip="Notes"
            flow="right"
        >
            ${Icon({ d: 'chevronUp', label: 'chevronUp', size: 36 })}
        </button>
    </div>
    <div class="${intrinsic({ intent: 'flex', gap: 'md' })}">
        <div
            class="${row({
                intent: 'noWrap',
                gap: 'sm',
                paddingXY: 'md',
                class: 'flex-grow',
            })}"
        >
            <button
                class="${button({
                    intent: 'primary',
                    class: 'red margin-auto-left',
                })}"
                type="button"
                tooltip="margin-left:auto"
                flow="left"
            >
                ${lineShortSpan}
            </button>
        </div>
        <div
            class="${row({
                intent: 'noWrap',
                gap: 'sm',
                paddingXY: 'md',
                class: 'flex-grow',
            })}"
        >
            <button
                class="${button({
                    intent: 'primary',
                })}"
                type="button"
            >
                ${lineShortSpan}
            </button>
            <button
                class="${button({
                    intent: 'primary',
                    class: 'red margin-auto-left',
                })}"
                type="button"
                tooltip="margin-left:auto"
                flow="left"
            >
                ${lineShortSpan}
            </button>
        </div>

        <div
            class="${row({
                intent: 'noWrap',
                gap: 'sm',
                paddingXY: 'md',
                class: 'flex-grow',
            })}"
        >
            <button
                class="${button({
                    intent: 'primary',
                })}"
                type="button"
            >
                ${lineShortSpan}
            </button>
            <button
                class="${button({
                    intent: 'primary',
                })}"
                type="button"
            >
                ${lineShortSpan}
            </button>
            <button
                class="${button({
                    intent: 'primary',
                    class: 'red margin-auto-left',
                })}"
                type="button"
                tooltip="margin-left:auto"
                flow="left"
            >
                ${lineShortSpan}
            </button>
        </div>
        <div
            class="${row({
                intent: 'noWrap',
                gap: 'sm',
                paddingXY: 'md',
                class: 'flex-grow',
            })}"
        >
            <button
                class="${button({
                    intent: 'primary',
                })}"
                type="button"
            >
                ${lineShortSpan}
            </button>
            <button
                class="${button({
                    intent: 'primary',
                    class: 'red margin-auto-right',
                })}"
                tooltip="margin-right:auto"
                type="button"
            >
                ${lineShortSpan}
            </button>
            <button
                class="${button({
                    intent: 'primary',
                })}"
                type="button"
            >
                ${lineShortSpan}
            </button>
        </div>
    </div>
`;

const cards = html`
    ${footer}
    <div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Aspect-ratio: portrait,square,landscape..."
            flow="right"
            class="${button({ intent: 'rounded', class: 'salmon' })}"
            style="text-decoration: none"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>
    </div>
    <div class="${intrinsic({ intent: 'grid', gap: 'md', gridSize: 'sm' })}">
        ${[...Array(4)].map(
            (_, idx) => html` <div
                class="${ratio({
                    intent:
                        idx === 3
                            ? 'landscape'
                            : idx === 2
                            ? 'square'
                            : 'portrait',
                    gap: 'sm',
                    paddingXY: 'sm',
                    group: 'column',
                    class: 'card',
                })}"
            >
                ${lineShort} ${![2, 3].includes(idx) ? lines : ''}
                ${![2, 3].includes(idx) ? lines : ''} ${idx === 1 ? lines : ''}
                <div class="margin-auto-top">
                    <a
                        href="#"
                        tooltip="margin-top:auto"
                        flow="right"
                        class="red animation-wiggle-hover"
                        style="display:inline-flex"
                    >
                        ${lineShortXL}
                    </a>
                </div>
            </div>`
        )}
    </div>
`;

const listDemo = html`
    <div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Item with start/end slots"
            flow="right"
            class="${button({ intent: 'rounded', class: 'blue' })}"
            style="text-decoration: none"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>
    </div>
    <ul id="snippets-list" role="list" aria-label="" class="${list()}">
        <li
            class="${item({
                intent: 'primary',
                paddingXY: 'sm',
                class: 'list-item',
            })}"
        >
            <div class="padding-x sm gap-sm">
                <div>${lineShortXL}</div>
                <div>${line}</div>
            </div>
        </li>

        <li
            class="${item({
                intent: 'primary',
                paddingXY: 'sm',
                class: 'list-item',
            })}"
        >
            <div class="${item({ intent: 'start' })}">
                <button
                    type="button"
                    data-animation-wiggle-hover
                    tooltip="start slot"
                    flow="right"
                    class="blue"
                >
                    ${lineSlotStart}
                </button>
            </div>
            <div class="padding-x sm gap-sm">
                <div>${lineShortXL}</div>
                <div>${line}</div>
            </div>
        </li>

        <li
            class="${item({
                intent: 'primary',
                paddingXY: 'sm',
                class: 'list-item',
            })}"
            style="--slot-end:calc(var(--slot-start) * 1.5);"
        >
            <div class="padding-x sm gap-sm">
                <div>${lineShortXL}</div>
                <div>${line}</div>
            </div>
            <div
                data-animation-wiggle-hover
                tooltip="end slot"
                flow="left"
                class="${item({ intent: 'end', class: 'blue' })}"
            >
                ${lineSlot}
            </div>
        </li>
        <li
            class="${item({
                intent: 'primary',
                class: 'list-item',
                paddingXY: 'sm',
            })}"
        >
            <div>
                <div class="list-divider">${line}</div>
            </div>
        </li>
        ${[...Array(6)].map(
            (_, idx) =>
                html` <li
                    class="${item({
                        intent: 'primary',
                        paddingXY: 'sm',
                        class: 'list-item',
                    })}"
                    style="--slot-end:calc(var(--slot-start) * 1.5);"
                >
                    <div class="${item({ intent: 'start' })}">
                        <button type="button" data-button="">
                            ${lineSlotStart}
                        </button>
                    </div>
                    <div class="padding-x sm gap-sm">
                        <div>
                            ${[2, 5].includes(idx) ? lineShortXL : lineShort}
                        </div>
                        <div>${idx === 5 ? lineShort : line}</div>
                    </div>
                    <div class="${item({ intent: 'end' })}">${lineSlot}</div>
                </li>`
        )}
    </ul>
`;

const inputDemo = html` <div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Item with start/end slots"
            flow="right"
            class="${button({ intent: 'rounded', class: 'blue' })}"
            style="text-decoration: none"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>
        <button
            data-button-opens="slots"
            type="button"
            class="${button({ intent: 'rounded', class: 'red' })}"
            tooltip="Notes"
            flow="right"
        >
            ${Icon({ d: 'chevronUp', label: 'chevronUp', size: 36 })}
        </button>
    </div>

    <div class="${intrinsic({ intent: 'grid', gridSize: 'lg', gap: 'sm' })}">
        <div class="${cx(item({ intent: 'primary' }), input())}">
            <a
                href="#"
                class="${item({ intent: 'start', class: 'blue' })}"
                tooltip="start slot"
                flow="right"
            >
                ${Icon({ d: 'heart', label: 'heart', size: 24 })}
            </a>
            <input
                id="text-input"
                type="text"
                autocomplete="off"
                placeholder="Write..."
            />
        </div>
        <div class="${cx(item({ intent: 'primary' }), input())}">
            <input
                id="text-input"
                type="text"
                autocomplete="off"
                placeholder="Write..."
            />
            <a
                href="#"
                class="${item({ intent: 'end', class: 'blue' })}"
                tooltip="end slot"
                flow="left"
            >
                ${Icon({ d: 'heart', label: 'heart', size: 24 })}
            </a>
        </div>
        <div class="${cx(item({ intent: 'primary' }), input())}">
            <a href="#" class="${item({ intent: 'start' })}">
                ${Icon({ d: 'heart', label: 'heart', size: 24 })}
            </a>
            <input
                id="text-input"
                type="text"
                autocomplete="off"
                placeholder="Write..."
            />
            <a href="#" class="${item({ intent: 'end' })}">
                ${Icon({ d: 'heart', label: 'heart', size: 24 })}
            </a>
        </div>
        <div
            class="${cx(item({ intent: 'primary' }), input())}"
            style="--slot-start:60px;--slot-end:60px;"
        >
            <p class="${item({ intent: 'start', paddingX: 'sm' })}">+34</p>
            <input
                id="text-input"
                type="text"
                autocomplete="off"
                placeholder="Phone number"
            />
        </div>
        <div
            class="${cx(item({ intent: 'primary' }), input())}"
            style="--slot-end:68px"
        >
            <input
                id="text-input"
                type="text"
                autocomplete="off"
                placeholder="Website:"
                required
            />
            <p
                data-padding="x"
                class="${item({ intent: 'end' })}"
                style="--slot-end:68px"
            >
                .com
            </p>
        </div>
    </div>`;

const ratioDemo = html`<div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Landscape checkboxes, square radios..."
            flow="right"
            class="${button({ intent: 'rounded', class: 'salmon' })}"
            style="text-decoration: none"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>

        <button
            data-button-opens="ratio"
            type="button"
            class="${button({ intent: 'rounded', class: 'red' })}"
            tooltip="Notes"
            flow="right"
        >
            ${Icon({ d: 'chevronUp', label: 'chevronUp', size: 36 })}
        </button>
    </div>
    <div class="grid ratio-demo">
        <fieldset class="grid">
            <div
                class="${ratio({
                    intent: 'landscape',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="checkbox-a" style="color: var(--salmon)">
                    ${lineShortXL} ${lineShort}
                </label>
                <input
                    type="checkbox"
                    name="option"
                    value="A"
                    id="checkbox-a"
                />
            </div>
            <div
                class="${ratio({
                    intent: 'landscape',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="checkbox-b" style="color: var(--salmon)">
                    ${lineShortXL} ${lineShort}
                </label>
                <input
                    type="checkbox"
                    name="option"
                    value="B"
                    id="checkbox-b"
                />
            </div>

            <div
                class="${ratio({
                    intent: 'landscape',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="checkbox-c" style="color: var(--salmon)">
                    ${lineShortXL} ${lineShort}
                </label>
                <input
                    type="checkbox"
                    name="option"
                    value="C"
                    id="checkbox-c"
                />
            </div>

            <div
                class="${ratio({
                    intent: 'landscape',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="checkbox-d" style="color: var(--salmon)">
                    ${lineShortXL} ${lineShort}
                </label>
                <input
                    type="checkbox"
                    name="option"
                    value="D"
                    id="checkbox-d"
                    indeterminate
                />
            </div>
        </fieldset>
        <fieldset class="grid">
            <div
                class="${ratio({
                    intent: 'square',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="radio-a"> ${lineShortXL} ${lineShort} </label>
                <input type="radio" name="option" value="A" id="radio-a" />
            </div>

            <div
                class="${ratio({
                    intent: 'square',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="radio-b"> ${lineShortXL} ${lineShort} </label>
                <input type="radio" name="option" value="B" id="radio-b" />
            </div>

            <div
                class="${ratio({
                    intent: 'square',
                    group: 'column',
                    class: ['place-items-center', 'place-content-center'],
                })}"
            >
                <label for="radio-c"> ${lineShortXL} ${lineShort} </label>
                <input type="radio" name="option" value="C" id="radio-c" />
            </div>
        </fieldset>
    </div>`;

const tableDemo = html` <div
        class="${row({
            intent: 'noWrap',
            paddingY: 'md',
            gap: 'md',
            class: 'place-items-center',
        })}"
    >
        <a
            href="#"
            tooltip="Sticky table cells"
            flow="right"
            class="${button({ intent: 'rounded', class: 'salmon' })}"
            style="text-decoration: none"
        >
            ${Icon({ d: 'pin', label: 'pin', size: 36 })}
        </a>
    </div>
    <div class="overflow x">
        <table>
            <thead>
                <tr>
                    <th>${lineShortXL}</th>
                    <th>${lineShortXL}</th>
                    <th>${lineShortXL}</th>
                    <th>${lineShortXL}</th>
                    <th>${lineShortXL}</th>
                    <th>${lineShortXL}</th>
                </tr>
            </thead>
            <tbody>
                ${[...Array(6)].map(
                    (_, idx) =>
                        html`<tr>
                            <td>
                                ${idx === 1
                                    ? line
                                    : idx === 4
                                    ? lineShort
                                    : lineShortXXL}
                            </td>
                            <td>${lineShort}</td>
                            <td>${lineShort}</td>
                            <td>${line}</td>
                            <td>${lineShort}</td>
                            <td>${lineShortXL}</td>
                        </tr>`
                )}
            </tbody>
        </table>
    </div>`;

(function (window, document) {
    window.app = function () {
        render(
            html`${unitDemo} ${cards} ${ratioDemo} ${listDemo} ${inputDemo}
            ${tableDemo}`,
            document.querySelector('#demo')
        );
    };
})(window, document);

import { html } from 'lit-html';
import { Icon } from '../app';

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

export const icons = html`
    <div>
        ${iconNames.map(
            (icon) =>
                html`<div tooltip="${icon}">
                    ${Icon({ d: icon, label: icon, size: 48 })}
                </div>`
        )}
    </div>
`;

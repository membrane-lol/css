import { cva } from 'cva';
import { padding, gap } from './utils.js';

export const ratio = cva(['ratio'], {
    variants: {
        intent: {
            auto: ['auto'],
            square: ['square'],
            portrait: ['portrait'],
            landscape: ['landscape'],
            ultrawide: ['ultrawide'],
        },
        group: {
            row: ['row'],
            column: ['column'],
        },
        ...padding,
        ...gap,
    },
    compoundVariants: [
        {
            intent: 'primary',
            gap: 'md',
        },
    ],
    defaultVariants: {
        intent: 'noWrap',
    },
});

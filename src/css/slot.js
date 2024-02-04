import { cva } from 'cva';
import { padding, gap } from './utils.js';

export const item = cva([], {
    variants: {
        intent: {
            primary: ['slot'],
            start: ['slot-start'],
            end: ['slot-end'],
        },
        ...padding,
        ...gap,
    },
    defaultVariants: {
        intent: 'primary',
    },
});

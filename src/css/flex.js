import { cva } from 'cva';
import { padding, gap, border } from './utils.js';

export const unit = cva(['unit'], {
    variants: {
        intent: {
            center: ['place-items-center', 'place-content-center'],
            start: ['place-items-start', 'place-content-start'],
        },
        ...padding,
        ...gap,
        ...border,
    },
    defaultVariants: {
        intent: 'center',
    },
});

export const row = cva(['row'], {
    variants: {
        intent: {
            noWrap: [],
            wrap: ['flex-wrap'],
        },
        ...padding,
        ...gap,
        ...border,
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

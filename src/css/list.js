import { cva } from 'cva';

export const list = cva(['list'], {
    variants: {
        intent: {
            primary: [],
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});

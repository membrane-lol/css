import { cva } from 'cva';

export const input = cva(['input'], {
    variants: {
        intent: {
            primary: [],
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});

import { cva } from 'cva';

export const button = cva(['button'], {
    variants: {
        intent: {
            primary: [],
            accent: ['accent-bg'],
            rounded: ['circle'],
            link: ['link'],
        },
        size: {
            small: ['sm'],
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});

export const buttonGroup = cva(['button-group'], {
    variants: {
        intent: {
            x: [],
            y: ['vertical'],
        },
    },
    defaultVariants: {
        intent: 'x',
    },
});

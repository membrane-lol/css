import { cva } from 'cva';

export const font = cva(['font'], {
    variants: {
        intent: {
            base: [],
            number: ['number'],
            shout: ['shout'],
            centered: ['text-center'],
            g2r: ['green-to-red'],
            r2g: ['red-to-green'],
        },
        sizes: {
            xs: ['xs'],
            sm: ['sm'],
            lg: ['lg'],
            xl: ['xl'],
            xxl: ['xxl'],
            xxxl: ['xxxl'],
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});

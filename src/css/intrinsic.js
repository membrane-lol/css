import { cva } from 'cva';
import { padding, gap } from './utils.js';

export const intrinsic = cva([], {
    variants: {
        intent: {
            flex: ['intrinsic-flex'],
            grid: ['intrinsic-grid'],
        },
        gridSize: {
            xsm: ['xsm'],
            md: ['md'],
            lg: ['lg'],
            xl: ['xl'],
        },
        ...padding,
        ...gap,
    },
});

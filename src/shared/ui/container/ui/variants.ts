import { cva } from 'class-variance-authority';

export const containerVariants = cva('flex', {
  variants: {
    variant: {
      colStart: 'flex-col justify-start',
      colCenter: 'flex-col items-center justify-center',
      rowStart: 'flex-row flex-wrap justify-start',
      rowCenter: 'flex-row flex-wrap items-center justify-center',
    },
  },
  defaultVariants: {
    variant: 'colCenter',
  },
});

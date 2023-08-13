import { cva } from 'class-variance-authority';

export const containerVariants = cva('flex', {
  variants: {
    variant: {
      flexCenter: 'flex-col items-center justify-center h-screen',
    },
  },
  defaultVariants: {
    variant: 'flexCenter',
  },
});

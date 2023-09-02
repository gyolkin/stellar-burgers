import { cva } from 'class-variance-authority';

export const scrollVariants = cva('scroll-smooth', {
  variants: {
    variant: {
      vertical: 'overflow-x-hidden overflow-y-auto',
      horizontal: 'overflow-y-hidden overflow-x-auto',
    },
    size: {
      short: 'max-h-[35vh]',
      medium: 'max-h-[65vh]',
      long: 'max-h-[75vh]',
    },
  },
  defaultVariants: {
    variant: 'vertical',
  },
});

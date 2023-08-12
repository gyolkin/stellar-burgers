import { cva } from 'class-variance-authority';

export const paragraphVariants = cva('leading-normal', {
  variants: {
    variant: {
      success: 'text-success',
      error: 'text-error',
      warning: 'text-accent',
      inactive: 'text-inactive',
    },
    font: {
      default: 'font-jetbrains',
      digits: 'font-iceland',
    },
    size: {
      default: 'text-base',
      small: 'text-sm',
      medium: 'text-2xl',
      large: 'text-4xl',
      heading: 'text-8xl',
    },
    weight: {
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    font: 'default',
    size: 'default',
  },
});

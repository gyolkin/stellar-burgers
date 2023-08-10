import { cva } from 'class-variance-authority';

export const paragraphVariants = cva('leading-7', {
  variants: {
    variant: {
      default: undefined,
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
      large: 'text-xl',
      heading: 'text-8xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    font: 'default',
    size: 'default',
  },
});

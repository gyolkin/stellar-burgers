import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full hover:scale-110 duration-500 disabled:cursor-not-allowed disabled:opacity-75',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-purple to-accent enabled:hover:shadow-glow',
        secondary: 'bg-secondary enabled:hover:shadow-dark',
        link: 'text-inactive',
      },
      size: {
        default: 'px-10 py-4',
        small: 'px-6 py-3 text-sm',
        large: 'px-10 py-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

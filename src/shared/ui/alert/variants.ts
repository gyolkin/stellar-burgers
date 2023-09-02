import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border-2 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        error: 'border-error/50 text-error [&>svg]:text-error',
        success: 'border-success/50 text-success [&>svg]:text-success',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

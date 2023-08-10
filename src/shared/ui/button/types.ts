import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

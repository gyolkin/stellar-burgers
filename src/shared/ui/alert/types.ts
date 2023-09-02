import type { VariantProps } from 'class-variance-authority';
import { alertVariants } from './variants';

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  heading?: string;
  text: string;
  icon?: 'ErrorIcon' | 'TickIcon';
}

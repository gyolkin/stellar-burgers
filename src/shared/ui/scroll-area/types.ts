import type { VariantProps } from 'class-variance-authority';
import { scrollVariants } from './variants';

export interface ScrollAreaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollVariants> {}

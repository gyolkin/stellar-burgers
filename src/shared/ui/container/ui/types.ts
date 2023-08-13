import type { VariantProps } from 'class-variance-authority';
import { containerVariants } from './variants';

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

import type { VariantProps } from 'class-variance-authority';
import { paragraphVariants } from './variants';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

import { cn } from '@/shared/lib';
import type { HeadingProps, ParagraphProps } from './types';
import { paragraphVariants } from './variants';

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  variant,
  font,
  weight,
  size,
  ...props
}) => {
  return (
    <p
      className={cn(
        paragraphVariants({ variant, font, size, weight, className }),
      )}
      {...props}
    >
      {children}
    </p>
  );
};

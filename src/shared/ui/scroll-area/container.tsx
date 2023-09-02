import React from 'react';
import { cn } from '@/shared/lib';
import { ScrollAreaProps } from './types';
import { scrollVariants } from './variants';

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(scrollVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ScrollArea.displayName = 'ScrollArea';

import React from 'react';
import { cn } from '@/shared/lib';
import { ContainerProps } from './types';
import { containerVariants } from './variants';

export const FlexContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        className={cn(containerVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FlexContainer.displayName = 'FlexContainer';

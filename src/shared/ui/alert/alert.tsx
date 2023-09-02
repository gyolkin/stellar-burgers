import React from 'react';
import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import { AlertProps } from './types';
import { alertVariants } from './variants';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ heading, text, icon, className, variant, ...props }, ref) => {
    const IconComponent = icon && iconsMap[icon];
    return (
      <div
        ref={ref}
        role='alert'
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {IconComponent && <IconComponent />}
        <Paragraph>{heading}</Paragraph>
        <Paragraph size='small' className='mt-2'>
          {text}
        </Paragraph>
      </div>
    );
  },
);

Alert.displayName = 'Alert';

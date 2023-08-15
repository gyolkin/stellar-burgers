import React from 'react';
import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';

import type { InputProps } from './types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, errorText, onIconClick, ...props }, ref) => {
    const IconComponent = icon ? iconsMap[icon] : null;
    return (
      <div className={cn('font-jetbrains', className)}>
        <div className='flex items-center justify-end h-14'>
          <input
            type={type}
            className={cn(
              'rounded-full w-full bg-night px-6 py-4 outline-none placeholder:text-inactive focus:transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50',
              error
                ? 'border-2 border-error'
                : 'border-none focus:ring-2 focus:ring-accent',
            )}
            ref={ref}
            {...props}
          />
          {IconComponent && (
            <IconComponent
              className='absolute mr-2 w-10 cursor-pointer'
              onClick={onIconClick}
            />
          )}
        </div>
        {error && <p className='text-error text-sm mt-1 ml-2'>{errorText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

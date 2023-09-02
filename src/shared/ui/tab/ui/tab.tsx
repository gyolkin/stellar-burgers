import { useCallback } from 'react';
import { cn } from '@/shared/lib';
import { Paragraph } from '@/shared/ui';
import type { TabProps } from './types';

export const Tab: React.FC<TabProps> = ({
  active,
  value,
  children,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);
  return (
    <div
      className={cn(
        'text-center text-inactive hover:cursor-pointer hover:text-white duration-500',
        active ? 'shadow-tabselect text-white' : 'shadow-tab',
      )}
      onClick={handleClick}
    >
      <Paragraph>{children}</Paragraph>
    </div>
  );
};

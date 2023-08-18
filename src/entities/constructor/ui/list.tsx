import { cn } from '@/shared/lib';
import type { ConstructorListProps } from '../model';

export const Constructor: React.FC<ConstructorListProps> = ({
  children,
  dropTarget,
  priceSlot,
  hoverClass,
}) => {
  return (
    <div
      ref={dropTarget}
      className={cn(
        'flex flex-col w-full lg:basis-1/2 justify-between lg:pt-10',
        hoverClass,
      )}
    >
      {children}
      {priceSlot}
    </div>
  );
};

import { cn } from '@/shared/lib';
import { FlexContainer } from '@/shared/ui';
import type { ConstructorListProps } from '../model';

export const Constructor: React.FC<ConstructorListProps> = ({
  children,
  dropTarget,
  priceSlot,
  hoverClass,
}) => {
  return (
    <FlexContainer
      variant='colStart'
      ref={dropTarget}
      className={cn(
        'w-full lg:basis-1/2 justify-between lg:pt-10',
        hoverClass,
      )}
    >
      {children}
      {priceSlot}
    </FlexContainer>
  );
};

import { constantsMap } from '@/shared/model';
import { Heading } from '@/shared/ui';
import type { IngredientListProps } from '../model';

export const IngredientList: React.FC<IngredientListProps> = ({
  children,
  tabsSlot,
  containerRef,
}) => {
  return (
    <div className='flex flex-col lg:basis-1/2 lg:gap-4'>
      <Heading className='text-center lg:text-left'>
        {constantsMap.texts.homeAction}
      </Heading>
      {tabsSlot}
      <div
        ref={containerRef}
        className='overflow-x-hidden overflow-y-auto scroll-smooth max-h-[65vh] px-2 lg:px-0'
      >
        {children}
      </div>
    </div>
  );
};

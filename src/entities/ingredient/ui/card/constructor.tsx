import { cn } from '@/shared/lib';
import { Paragraph } from '@/shared/ui';
import type { ConstructorIngredientProps } from '../../model';

export const ConstructorIngredient: React.FC<ConstructorIngredientProps> = ({
  name,
  _id,
  priceSlot,
  image,
  actionSlot,
  dragSlot,
  dragRef,
  className,
}) => {
  return (
    <div
      data-cy={'set-' + _id}
      className='flex flex-row flex-nowrap items-center pr-5'
      ref={dragRef}
    >
      {dragSlot}
      <div className={cn('inline-block bg-night py-4 px-6 flex-1', className)}>
        <div className='flex items-center'>
          <img src={image} alt={name} className='mr-5' width='80' height='40' />
          <Paragraph className='inline-flex items-center text-left flex-grow mr-5'>
            {name}
          </Paragraph>
          {priceSlot}
          {actionSlot}
        </div>
      </div>
    </div>
  );
};

import { Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../model';

export const Ingredient: React.FC<IngredientProps> = ({
  name,
  image,
  counterSlot,
  removeSlot,
  addSlot,
  priceSlot,
  dragRef,
}) => {
  return (
    <div
      ref={dragRef}
      className='relative flex flex-col items-center justify-center gap-2 basis-2/5 hover:transition-all hover:scale-110 duration-500 hover:cursor-pointer'
    >
      {counterSlot}
      <img src={image} alt={name} />
      {priceSlot}
      <Paragraph size='small' className='text-center'>
        {name}
      </Paragraph>
      <div className='flex flex-row flex-nowrap gap-4 pt-2 lg:hidden'>
        {removeSlot}
        {addSlot}
      </div>
    </div>
  );
};

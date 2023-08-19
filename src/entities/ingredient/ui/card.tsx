import { Link, useLocation } from 'react-router-dom';
import { navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../model';

export const Ingredient: React.FC<IngredientProps> = ({
  _id,
  name,
  image,
  counterSlot,
  removeSlot,
  addSlot,
  priceSlot,
  dragRef,
}) => {
  const location = useLocation();
  return (
    <div
      className='relative basis-2/5 hover:scale-110 duration-500'
      ref={dragRef}
    >
      <Link
        to={navigationMap.ingredients + `/${_id}`}
        state={{ background: location }}
        className='flex flex-col justify-center items-center gap-2'
      >
        {counterSlot}
        <img src={image} alt={name} />
        {priceSlot}
        <Paragraph size='small' className='text-center'>
          {name}
        </Paragraph>
      </Link>
      <div className='flex flex-row flex-nowrap justify-center gap-4 pt-2 lg:hidden'>
        {removeSlot}
        {addSlot}
      </div>
    </div>
  );
};

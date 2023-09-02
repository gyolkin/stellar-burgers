import { Link, useLocation } from 'react-router-dom';
import { navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../../model';
import { IngredientPrice } from '../price';

export const Ingredient: React.FC<IngredientProps> = ({
  _id,
  name,
  image,
  price,
  counterSlot,
  removeSlot,
  addSlot,
  dragRef,
}) => {
  const location = useLocation();
  return (
    <div
      data-cy={_id}
      className='relative basis-2/5 lg:hover:scale-110 lg:duration-500'
      ref={dragRef}
    >
      <Link
        to={navigationMap.ingredients + `/${_id}`}
        state={{ background: location }}
        className='flex flex-col justify-center items-center gap-2'
      >
        {counterSlot}
        <img src={image} alt={name} />
        <IngredientPrice value={price} />
        <Paragraph size='small' className='text-center'>
          {name}
        </Paragraph>
      </Link>
      <div className='flex flex-col gap-1 sm:flex-row sm:gap-4 sm:flex-nowrap justify-center pt-2 lg:hidden'>
        {removeSlot}
        {addSlot}
      </div>
    </div>
  );
};

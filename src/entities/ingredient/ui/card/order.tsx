import { Paragraph } from '@/shared/ui';
import type { OrderIngredientProps } from '../../model';
import { IngredientIcon } from '../icon';
import { IngredientPrice } from '../price';

export const OrderIngredient: React.FC<OrderIngredientProps> = ({
  image_mobile,
  name,
  price,
  count,
}) => {
  return (
    <div className='inline-flex items-center gap-4 w-full'>
      <IngredientIcon image={image_mobile} className='mr-2' />
      <Paragraph className='w-2/5 lg:w-1/2'>{name}</Paragraph>
      <div className='inline-flex items-center gap-2 ml-auto'>
        <Paragraph font='digits' size='medium'>
          {count}
        </Paragraph>{' '}
        x <IngredientPrice value={price} />
      </div>
    </div>
  );
};

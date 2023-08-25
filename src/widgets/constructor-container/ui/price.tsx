import { OrderButton } from '@/features/order';
import { selectTotalPrice } from '@/entities/constructor';
import { IngredientPrice } from '@/entities/ingredient';
import { useAppSelector } from '@/shared/lib';

export const PriceSummary: React.FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <div className='flex flex-row flex-wrap justify-end p-2 lg:p-0'>
      <IngredientPrice value={totalPrice} digitsSize='large' className='mr-5' />
      <OrderButton />
    </div>
  );
};

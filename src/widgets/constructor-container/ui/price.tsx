import { OrderButton } from '@/features/constructor/order';
import { selectTotalPrice } from '@/entities/constructor';
import { IngredientPrice } from '@/entities/ingredient';
import { useAppSelector } from '@/shared/lib';
import { FlexContainer } from '@/shared/ui';

export const PriceSummary: React.FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <FlexContainer variant='rowStart' className='justify-end p-2 lg:p-0'>
      <IngredientPrice value={totalPrice} digitsSize='large' className='mr-5' />
      <OrderButton />
    </FlexContainer>
  );
};

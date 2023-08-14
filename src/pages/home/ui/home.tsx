import { IngredientsContainer } from '@/widgets/ingredients-container';
import { OrderContainer } from '@/widgets/order-container';
import { FlexContainer } from '@/shared/ui';

export const HomePage = () => {
  return (
    <FlexContainer variant="rowStart" className='lg:gap-10 lg:flex-nowrap'>
      <IngredientsContainer />
      <OrderContainer />
      {/* REMOVE HARDCODE FROM ORDER CONTAINER */}
    </FlexContainer>
  );
};

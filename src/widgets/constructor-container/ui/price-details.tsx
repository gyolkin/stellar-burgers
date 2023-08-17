import { OrderButton } from '@/features/constructor/order';
import { selectTotalPrice } from '@/entities/constructor';
import { useAppSelector } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { FlexContainer, Paragraph } from '@/shared/ui';

export const PriceDetails: React.FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <FlexContainer variant='rowStart' className='justify-end p-2 lg:p-0'>
      <span className='inline-flex items-center gap-2 mr-5'>
        <Paragraph font='digits' size='large'>
          {totalPrice}
        </Paragraph>
        <iconsMap.PriceIcon />
      </span>
      <OrderButton />
    </FlexContainer>
  );
};

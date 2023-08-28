import { constantsMap, iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { OrderObject } from '../model';

export const OrderModalContent: React.FC<OrderObject> = ({ name, order }) => {
  const { mainText, inactiveText, iconSize } =
    constantsMap.entities.order.modal;
  return (
    <div className='flex flex-col text-center justify-center items-center gap-4 lg:gap-8'>
      <Paragraph size='heading' className='text-shadow'>
        {order.number}
      </Paragraph>
      <Paragraph>{name}</Paragraph>
      <iconsMap.TickIcon size={iconSize} />
      <div>
        <Paragraph>{mainText}</Paragraph>
        <Paragraph variant='inactive'>{inactiveText}</Paragraph>
      </div>
    </div>
  );
};

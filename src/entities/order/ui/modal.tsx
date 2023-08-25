import { constantsMap, iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { TransformedOrderObject } from '../model';

export const OrderModalContent: React.FC<TransformedOrderObject> = ({
  name,
  number,
}) => {
  const { mainText, inactiveText, iconSize } =
    constantsMap.entities.order.modal;
  return (
    <div className='flex flex-col text-center justify-center items-center gap-4 lg:gap-8'>
      <Paragraph size='heading' className='text-shadow'>
        {number}
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

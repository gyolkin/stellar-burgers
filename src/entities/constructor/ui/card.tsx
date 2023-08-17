import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { ConstructorElementProps } from '../model';

export const ConstructorElement: React.FC<ConstructorElementProps> = ({
  name,
  price,
  image,
  iconSlot,
  className,
}) => {
  return (
    <div className={cn('inline-block bg-night max-w-xl py-4 px-6', className)}>
      <div className='flex items-center'>
        <img src={image} alt={name} className='mr-5' width='80' height='40' />
        <Paragraph className='inline-flex items-center text-left flex-grow mr-5'>
          {name}
        </Paragraph>
        <span className='inline-flex items-center gap-2 mr-5'>
          <Paragraph font='digits' size='medium'>
            {price}
          </Paragraph>
          <iconsMap.PriceIcon />
        </span>
        {iconSlot}
      </div>
    </div>
  );
};

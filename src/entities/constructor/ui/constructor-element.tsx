import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { ConstructorElementProps } from '../model';

export const ConstructorElement: React.FC<ConstructorElementProps> = ({
  name,
  price,
  image,
  isLocked,
  type,
  handleClose,
}) => {
  // ADD FEATURE SLOTS (!!) IT'S AN ENTITY
  return (
    <div
      className={cn(
        'inline-block bg-night max-w-xl py-4 px-6',
        type === 'top'
          ? 'rounded-[88px_88px_40px_40px]'
          : type === 'bottom'
          ? 'rounded-[40px_40px_88px_88px]'
          : 'rounded-full',
      )}
    >
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
        <span className='inline-flex items-center ml-5'>
          {isLocked ? (
            <iconsMap.LockedIcon className='text-inactive' />
          ) : (
            <iconsMap.RemoveIcon
              className='hover:cursor-pointer'
              onClick={handleClose}
            />
          )}
        </span>
      </div>
    </div>
  );
};

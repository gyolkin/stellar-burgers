import { DesktopButtonRemove } from '@/features/constructor/remove';
import { ConstructorElement } from '@/entities/constructor';
import { iconsMap } from '@/shared/model';
import type { ConstructorElementDetailsProps } from '../model';

export const ConstructorElementDetails: React.FC<
  ConstructorElementDetailsProps
> = ({ ingredient, index, positionClassName }) => {
  return (
    <ConstructorElement
      name={ingredient.name}
      price={ingredient.price}
      image={ingredient.image}
      iconSlot={
        ingredient.type === 'bun' ? (
          <iconsMap.LockedIcon className='text-inactive inline-flex items-center ml-5' />
        ) : (
          <DesktopButtonRemove index={index} />
        )
      }
      className={positionClassName}
    />
  );
};

import { v4 as uuid4 } from 'uuid';
import { useIngredientDrop } from '@/features/constructor/add';
import { selectConstructor } from '@/entities/constructor';
import { Constructor } from '@/entities/constructor';
import { useAppSelector } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Heading } from '@/shared/ui';
import { ConstructorElementDetails } from './card';
import { PriceSummary } from './price';

export const ConstructorContainer: React.FC = () => {
  const { isHover, dropTarget } = useIngredientDrop();
  const { bun, ingredients } = useAppSelector(selectConstructor);
  return (
    <Constructor
      dropTarget={dropTarget}
      hoverClass={
        isHover
          ? 'border-dashed border-2 border-inactive rounded-lg'
          : 'border-solid border-2 border-transparent'
      }
      priceSlot={<PriceSummary />}
    >
      {ingredients.length > 0 || bun ? (
        <div className='hidden lg:flex flex-col gap-2'>
          {bun ? (
            <ConstructorElementDetails
              ingredient={bun}
              positionClassName='rounded-[88px_88px_40px_40px]'
            />
          ) : (
            <Heading className='hidden lg:block text-shadow text-center pb-10'>
              {constantsMap.texts.constructorAddBunAction}
            </Heading>
          )}
          <div className='flex flex-col gap-2 overflow-x-hidden overflow-y-auto scroll-smooth max-h-[36vh]'>
            {ingredients?.map((item, index) => (
              <ConstructorElementDetails
                key={uuid4()}
                index={index}
                ingredient={item}
                positionClassName='rounded-full'
              />
            ))}
          </div>
          {bun && (
            <ConstructorElementDetails
              ingredient={bun}
              positionClassName='rounded-[40px_40px_88px_88px]'
            />
          )}
        </div>
      ) : (
        <Heading className='hidden lg:block text-shadow text-center lg:pt-48'>
          {constantsMap.texts.constructorAction}
        </Heading>
      )}
    </Constructor>
  );
};
